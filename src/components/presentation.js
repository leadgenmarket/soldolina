import React from "react"
import { useSendForm } from "../hooks/send-from.hook";
import { PhoneInput } from "./phone_input"

export const Presentation = () => {
    const sendForm = useSendForm();
    return (
        <div className="bg_gray plr">
            <div className="wmain">
                <div className="get_present">
                    <div className="tm">
                        Получите <b>презентацию</b> <br />объекта
                    </div>
                    <form className="form_style">
                        <div className="form_title">Отправляем в течение 5 минут</div>
                        <div className="form_content">
                            <div className="form_item"><PhoneInput placeholder="Телефон" /></div>
                            <div className="form_item"><input type="text" name="email" className="ym-record-keys" placeholder="Почта" /></div>
                            <input className="text" type="hidden" value="Получить презентацию" />
                            <div className="form_item"><button className="btn_main" celtype="getPresent" onClick={sendForm.sendForm}>Отправить</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}