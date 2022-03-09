import React, { useState } from "react"
import Slider from '@material-ui/core/Slider';
import { PhoneInput } from "./phone_input";
import { useSendForm } from "../hooks/send-from.hook";

export const Podbor = () => {
    const sendForm = useSendForm();
    const [floor, setFloor] = useState([3, 15])
    const [type, setType] = useState("all")
    const handleChange = (event, newValue) => {
        setFloor(newValue);
    };

    const typeClick = (type) => {
        setType(type)
    }

    const getType = (type) => {
        if (type == "all") {
            return "Все типы"
        } else if (type == "0") {
            return "Студии"
        } else {
            return type + "-комнатные"
        }
    }
    return (
        <div className="wmain">
            <div class="get_present get_flat">
                <div class="tm tt">
                    <b>Получите подборку</b> свободных квартир с планировками и ценами
                </div>
                <form class="form_style">
                    <div class="form_title">Отправляем в теченеи 30 минут</div>
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
                            <div id="slid__etaj_2" class="slid"></div>
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
                    </div>
                    <div class="form_content">
                        <div class="form_item"><PhoneInput placeholder="Телефон" /></div>
                        <div class="form_item"><input type="text" name="email" placeholder="Почта" /></div>
                        <input type="hidden" className="text" value={'Получить подборку свободных квартир.  Кол-во комнат: ' + getType(type) + '; Этажи ' + floor[0] + " - " + floor[1]} />
                        <div class="form_item"><button class="btn_main" onClick={sendForm.sendForm}>Отправить</button></div>
                    </div>
                </form>
            </div>
        </div>
    )
}