import React from "react"

export const GetFlat = () => {
    console.log(process.env.REACT_APP_BACKEND_URL)
    return (
        <div class="wmain">
            <section class="flat">
                <div id="page2" class="tm tt">
                    <b>Выберите квартиру</b> по <br />нужным параметрам
                </div>
                <div class="flat__nav">
                    <div class="flat__nav_item">
                        <div class="flat__nav_name">Комнаты</div>
                        <div class="flat__nav_btn">
                            <div>Все</div>
                            <div>1</div>
                            <div class="act">2</div>
                            <div>3</div>
                        </div>
                    </div>
                    <div class="flat__nav_item">
                        <div class="flat__nav_name">Этаж</div>
                        <div id="slid__etaj" class="slid"></div>
                    </div>
                    <div class="flat__nav_item">
                        <div class="flat__nav_name">Площадь</div>
                        <div id="slid__area" class="slid"></div>
                    </div>
                </div>
                <ul class="benefit__list">
                    <li>
                        <div class="benefit__item">
                            <a class="benefit__img" href="#"><img src="img/offer_img1.png" /></a>
                            <div class="benefit__title">
                                Студия 18 м²
                            </div>
                            <a class="benefit__btn" href="#">Записаться на просмотр</a>
                        </div>
                    </li>
                    <li>
                        <div class="benefit__item">
                            <a class="benefit__img" href="#"><img src="img/offer_img2.png" /></a>
                            <div class="benefit__title">
                                Студия 18 м²
                            </div>
                            <a class="benefit__btn" href="#">Записаться на просмотр</a>
                        </div>
                    </li>
                    <li>
                        <div class="benefit__item">
                            <a class="benefit__img" href="#"><img src="img/offer_img3.png" /></a>
                            <div class="benefit__title">
                                Студия 18 м²
                            </div>
                            <a class="benefit__btn" href="#">Записаться на просмотр</a>
                        </div>
                    </li>
                </ul>
                <div class="benefit__list_btn">
                    <div class="btn_white">Показать еще</div>
                </div>
            </section>
        </div>
    )
}