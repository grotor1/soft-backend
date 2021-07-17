const {Router} = require('express')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const router = Router()


router.post('/login',
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
            if (config.get('adminPassword') !== password) {
                return res.status(400).json({message: 'Неверный пароль'})
            }
            const token = jwt.sign(
                {password},
                config.get('jwtSecret'),
                {expiresIn: "1h"}
            )
            res.json({token})
        } catch (e) {
            res.status(500).json({message: "Что-то не так"})
        }
    })

module.exports = router