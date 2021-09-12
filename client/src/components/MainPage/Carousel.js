import { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class AboutCarousel extends Component{
    render() {
        return (
            <Carousel showArrows={true}  itemsToShow={1} showArrows={false} enableAutoPlay={true} interval={50000} infiniteLoop={true}>
                <div className="about-us__item">
                                            <div className="about-us__texts">
                                                <span className="about-us__head">Удобная платформа для спорта все-в-одном</span>
                                                <p className="about-us__desc">Всё проводится на нашей платформе. Вам не придётся заходить на сторонние сервисы</p>
                                            </div>
                                            {/* <img src="/about-image.png" alt="" className="about-img" />     */}
                                        </div>
                                        <div className="about-us__item">
                                            <div className="about-us__texts">
                                                <span className="about-us__head">1:1 Онлайн тренировки</span>
                                                <p className="about-us__desc">Личные тренер подберёт все процессы индивидуально под вас</p>
                                            </div>
                                            {/* <img src="/about-image.png" alt="" className="about-img"/>     */}
                                        </div>
                                        <div className="about-us__item">
                                            <div className="about-us__texts">
                                                <span className="about-us__head">Сертифицированные специалисты</span>
                                                <p className="about-us__desc">На платформе специалисты с опытом работы более 2 лет</p>
                                            </div>
                                            {/* <img src="/about-image.png" alt="" className="about-img"/>     */}
                                        </div>
                                        <div className="about-us__item">
                                            <div className="about-us__texts">
                                                <span className="about-us__head">Доступные цены</span>
                                                <p className="about-us__desc">Онлайн-тренировки не только легче, но и дешевле. При этом вы не теряете эффективности тренировок.</p>
                                                <b className="about-us__desc">Тренировки от 800 руб!</b>
                                                <p className="about-us__desc">Первое занятие бесплатно</p>
                                            </div>
                                            {/* <img src="/about-image.png" alt="" className="about-img"/>     */}
                                        </div>
            </Carousel>
        );
    }
}
export default AboutCarousel