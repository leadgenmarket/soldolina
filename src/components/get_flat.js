import React, { useState } from "react"
import Slider from '@material-ui/core/Slider';

export const GetFlat = () => {
    const [floor, setFloor] = useState([3, 15])
    const [area, setArea] = useState([20, 140])
    const [type, setType] = useState("all")
    const handleChange = (event, newValue) => {
        setFloor(newValue);
    };

    const handleChangeArea = (event, newValue) => {
        setArea(newValue)
    }


    const typeClick = (type) => {
        setType(type)
    }
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
                            <div className={type == "all" ? "act" : ""} onClick={() => typeClick("all")}>Все</div>
                            <div className={type == "1" ? "act" : ""} onClick={() => typeClick("1")}>1</div>
                            <div className={type == "2" ? "act" : ""} onClick={() => typeClick("2")}>2</div>
                            <div className={type == "3" ? "act" : ""} onClick={() => typeClick("3")}>3</div>
                        </div>
                    </div>
                    <div class="flat__nav_item">
                        <div class="flat__nav_name">Этаж</div>
                        <div id="slid__etaj" class="slid"></div>
                        <Slider className="slid_style_react"
                            //defaultValue={floor}
                            value={floor}
                            step={1}
                            min={1}
                            max={18}
                            onChange={handleChange}
                            valueLabelDisplay="on"
                        />
                    </div>
                    <div class="flat__nav_item">
                        <div class="flat__nav_name">Площадь</div>
                        <div id="slid__area" class="slid"></div>
                        <Slider className="slid_style_react"
                            //defaultValue={floor}
                            value={area}
                            step={1}
                            min={1}
                            max={160}
                            onChange={handleChangeArea}
                            valueLabelDisplay="on"
                        />
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