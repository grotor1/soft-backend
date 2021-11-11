import React from 'react'
import Header from '../Header'
import './AboutPage.css'
import Footer from '../Footer'

const AboutPage = () => {
    return(
        <div className="about">
             <Header />
            <div className="container">
                <div className="about__content">
                   <div className="about__person">
                       <div className="person__block">
                           <img src="./abay.png" className="person__image"/>
                           <p className="mt-33"><a className="person__contacts" href="https://www.instagram.com/abay_beyshenkulov/">Co-founder and CEO of SOFT-platform</a></p>
                       </div>
                       <div>
                           <h1 className="person__motto">
                                Мы здесь, чтобы сделать спорт проще
                           </h1>
                           <p className="person__text mt-92">Abay Beyshenkulov</p>
                           <p className="person-about__text-center">Co-founder and CEO of SOFT-platform</p>
                           <p className="person-about__text">
                           Мне 17 лет, я молодой предприниматель. Самое главное для меня - это приносить ценность в общество в больших масштабах, именно поэтому я собрал команду, и мы создали продукт, которым сейчас можете пользоваться вы. 
                        <p>Я спортсмен и занимаюсь фехтованием на протяжении 10 лет. Поэтому я долго не задумывался при выборе индустрии нашего стартапа. Основной проблемой для меня является скептицизм со стороны людей вокруг моей ранней сознательной деятельности. Однако, не смотря на возраст, у меня интересный профессиональный опыт в индустрии стартапов. Я работал и проходил множество стажировок в таких компаниях, как MalikSpace, Silicon Valley Camp, Martenly, BGC Camp и другие.</p>
                        <p>Цели и принципы - это то, что объединяет нашу команду как одно целое. Мы не подростки, мы в первую очередь профессионалы своего дело, мыслящие за рамки стандартного видения этого мира</p>
                           </p>
                       </div>
                   </div>
                   <div className="team">
                       <h1 className="person__motto" className="team__title">Наша команда</h1>
                       <ul className="team__list">
                           <li className="team__item">
                               <img className="team__image" src="./Nurbek.png" />
                               <div className="team__right">
                                   <p className="team__name">Нурбек Бактыгали</p>
                                   <p className="team__position">COO</p>
                                   <button className="team-link">
                                       <a href="https://www.instagram.com/baktygalinurbek/" target="_blank">
                                           <img className="team-link__img" src="./inst.svg" />
                                       </a>
                                   </button>
                               </div>
                           </li>
                           <li className="team__item">
                               <img className="team__image" src="./V.png" />
                               <div className="team__right">
                                   <p className="team__name">Владимир Варухин</p>
                                   <p className="team__position">backend</p>
                                   <button className="team-link">
                                       <a href="https://www.instagram.com/grotor_peach/" target="_blank">
                                           <img className="team-link__img" src="./inst.svg" />
                                       </a>
                                   </button>
                               </div>
                           </li>
                           <li className="team__item">
                               <img className="team__image" src="./Liliya.png" />
                               <div className="team__right">
                                   <p className="team__name">Жиркова Лилия</p>
                                   <p className="team__position">Designer</p>
                                   <button className="team-link">
                                       <a href="https://www.instagram.com/lilya_zee/?hl=ru" target="_blank">
                                           <img className="team-link__img" src="./inst.svg" />
                                       </a>
                                   </button>
                               </div>
                           </li>
                           <li className="team__item">
                               <img className="team__image" src="./Intersect.png" />
                               <div className="team__right">
                                   <p className="team__name">Валерия Варфоломеева</p>
                                   <p className="team__position">Marketer</p>
                                   <button className="team-link">
                                       <a href="https://www.instagram.com/syirnichek/?hl=ru" target="_blank">
                                           <img className="team-link__img" src="./inst.svg" />
                                       </a>
                                   </button>
                               </div>
                           </li>
                           <li className="team__item">
                               <img className="team__image" src="./Masha.png" />
                               <div className="team__right">
                                   <p className="team__name">Колдубаева Мария</p>
                                   <p className="team__position">seo, backend</p>
                                   <button className="team-link">
                                       <a href="https://www.instagram.com/mashamellow4488/?hl=ru" target="_blank">
                                           <img className="team-link__img" src="./inst.svg" />
                                       </a>
                                   </button>
                               </div>
                           </li>
                           <li className="team__item">
                               <img className="team__image" src="./Egor.png" />
                               <div className="team__right">
                                   <p className="team__name">Егор Аммосов</p>
                                   <p className="team__position">frontend</p>
                                   <button className="team-link">
                                       <a href="https://www.instagram.com/ammosov2203/?hl=ru" target="_blank">
                                           <img className="team-link__img" src="./inst.svg" />
                                       </a>
                                   </button>
                               </div>
                           </li>
                           <li className="team__item">
                               <img className="team__image" src="./Val.png" />
                               <div className="team__right">
                                   <p className="team__name">Валерия Цикало</p>
                                   <p className="team__position">Designer</p>
                                   <button className="team-link">
                                       <a href="https://www.instagram.com/lera.vts/?hl=ru" target="_blank">
                                           <img className="team-link__img" src="./inst.svg" />
                                       </a>
                                   </button>
                               </div>
                           </li>
                           <li className="team__item">
                               <img className="team__image" src="./Alina.png" />
                               <div className="team__right">
                                   <p className="team__name">Алина Плющева</p>
                                   <p className="team__position">SMM</p>
                                   <button className="team-link">
                                       <a href="https://www.instagram.com/allinapl/?hl=ru" target="_blank">
                                           <img className="team-link__img" src="./inst.svg" />
                                       </a>
                                   </button>
                               </div>
                           </li>
                           <li className="team__item">
                               <img className="team__image" src="./Naf.png" />
                               <div className="team__right">
                                   <p className="team__name">Валиева Нафиса</p>
                                   <p className="team__position">frontend</p>
                                   <button className="team-link">
                                       <a href="https://www.instagram.com/dweebishqys/" target="_blank">
                                           <img className="team-link__img" src="./inst.svg" />
                                       </a>
                                   </button>
                               </div>
                           </li>
                       </ul>
                   </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage