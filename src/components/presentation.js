import React from "react"
import { useSendForm } from "../hooks/send-from.hook";
import { BestOffers } from "./best_offers";
import { Contacts } from "./contacts";
import { Footer } from "./footer";
import { Gallery } from "./gallery";
import { GetFlat } from "./get_flat";
import { GetThere } from "./get_there";
import { Hod_str } from "./hod_str";
import { Ipoteka } from "./ipoteka";
import { Locations } from "./location";
import { Genplans } from "./genplan";
import { PhoneInput } from "./phone_input"
import { Podbor } from "./podbor";

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
                            <div className="form_item"><button className="btn_main" celtype="getPresent" onClick={sendForm.sendForm}>Получить презентацию</button></div>
                        </div>
                    </form>
                </div>
                <BestOffers />
                <Genplans />
                <Locations />
                <GetFlat />
                <GetThere />,
                <Podbor />,
                <Ipoteka />,
                <Gallery />,
                <Hod_str />,
                <Contacts />,
                <Footer />
            </div>
        </div>
    )
}