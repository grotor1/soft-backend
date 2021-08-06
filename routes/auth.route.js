const {Router} = require('express')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const router = Router()
const User = require('../models/user.model')


router.post('/loginAdmin',
    [
        check('password', 'Введите пароль').exists(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некорректные данные при регистрации"
                })
            }
            const {password} = req.body;
            console.log(password)
            if (config.get('adminPassword') !== password) return res.status(400).json({message: 'Неверный пароль'})
            const token = jwt.sign(
                {password},
                config.get('jwtSecret'),
                {expiresIn: "1h"}
            )
            res.json({token})
        } catch (e) {
            res.status(500).json({message: "Что-то не так"})
        }
    }
)

router.post("/regUser",
    [
        check('email', 'Введите почту').exists().isEmail(),
        check('password', 'Введите пароль').exists(),
        check('passwordRep', 'Повторите пароль').exists(),
        check('name', 'Введите имя').exists(),
        check('surname', 'Введите фамилию').exists(),
        check('birthDate', 'Введите дату рождения').exists(),
        check('phone', 'Введите телефон').exists(),
        check('sex', 'Укажите пол').exists(),
        check('target', 'Выберите цель').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некорректные данные при регистрации"
                })
            }
            const {email, password, passwordRep, name, surname, birthDate, phone, sex, target} = req.body;
            const candidate = await User.findOne({email})
            if (candidate) return res.status(400).json({message: "По этому адресу уже есть аккаунт"})
            if (password !== passwordRep) return res.status(400).json({message: "Пароли не совпадают"})
            const user = new User({email, password, name, surname, birthDate, phone, sex, target})
            await user.save()
            res.status(201).json({message: "Новый пользователь создан", success: true})
        } catch (e) {
            res.status(500).json({message: "Что-то не так", error: e})
        }
    }
)

router.post('/loginUser',
    [
        check('email', 'Введите email').exists(),
        check('password', 'Введите пароль').exists(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некорректные данные при входе"
                })
            }
            const {email, password} = req.body;
            const user = await User.findOne({email})
            if (!user) return res.status(400).json({message: 'Пользователь не обнаружен'})
            if (user.password !== password) return res.status(400).json({message: 'Неверный пароль'})
            const token = jwt.sign(
                {_id_userInf: user._id},
                config.get('jwtSecret'),
                {expiresIn: "1h"}
            )
            res.json({token, _id_user: user._id})
        } catch (e) {
            res.status(500).json({message: "Что-то не так"})
        }
    }
)

module.exports = router