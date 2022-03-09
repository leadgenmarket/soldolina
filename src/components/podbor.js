import React from "react"

export const Podbor = () => {
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
                                <div>Все</div>
                                <div>1</div>
                                <div class="act">2</div>
                                <div>3</div>
                            </div>
                        </div>
                        <div class="flat__nav_item">
                            <div class="flat__nav_name">Этаж</div>
                            <div id="slid__etaj_2" class="slid"></div>
                        </div>
                    </div>
                    <div class="form_content">
                        <div class="form_item"><input class="in_phone" type="text" value="Телефон" data="Телефон" /></div>
                        <div class="form_item"><input type="text" value="Почта" data="Почта" /></div>
                        <div class="form_item"><button class="btn_main">Отправить</button></div>
                    </div>
                </form>
            </div>
        </div>
    )
}