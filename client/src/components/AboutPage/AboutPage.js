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
                           <p className="person__contacts">Co-founder and CEO of SOFT-platform</p>
                       </div>
                       <div>
                           <h1 className="person__motto">
                                Мы здесь, чтобы сделать спорт проще
                           </h1>
                           <p className="person__text mt-92">Abay Beyshenkulov</p>
                           <p className="person__text">Co-founder and CEO of SOFT-platform</p>
                           <p className="person-about__text">
                           Мне 17 лет, я молодой предприниматель. Самое главное для меня - это приносить ценность в общество в больших масштабах, именно поэтому я собрал команду, и мы создали продукт, которым сейчас можете пользоваться вы. 
                        Я спортсмен и занимаюсь фехтованием на протяжении 10 лет. Поэтому я долго не задумывался при выборе индустрии нашего стартапа. Основной проблемой для меня является скептицизм со стороны людей вокруг моей ранней сознательной деятельности. Однако, не смотря на возраст, у меня интересный профессиональный опыт в индустрии стартапов. Я работал и проходил множество стажировок в таких компаниях, как MalikSpace, Silicon Valley Camp, Martenly, BGC Camp и другие.
                        Цели и принципы - это то, что объединяет нашу команду как одно целое. Мы не подростки, мы в первую очередь профессионалы своего дело, мыслящие за рамки стандартного видения этого мира
                           </p>
                       </div>
                   </div>
                   <div className="team">
                       <h1 className="person__motto" className="team__title">Наша команда</h1>
                       <ul className="team__list">
                           <button className="team__item">
                               <img className="team__image" src="./Nurbek.png" />
                               <div className="team__right">
                                   <p className="team__name">Нурбек Бактыгали</p>
                                   <p className="team__position">COO</p>
                               </div>
                           </button>
                           
                       </ul>
                   </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage