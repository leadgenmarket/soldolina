import React from "react"
export const Genplans = () => {
    return (
        <div className="genplan">
            <div className="wmain">
                <div className="tm tt">
                    Генплан комплекса
                </div>
                <div className="genplan__inner">
                    <div className="genplan__inner_hover genplan__inner_hover1">
                        <div className="genplan__inner_plashka">Сад</div>
                    </div>
                    <div className="genplan__inner_hover genplan__inner_hover2">
                        <div className="genplan__inner_plashka">ТРЦ</div>
                    </div>
                    <div className="genplan__inner_hover genplan__inner_hover3">
                        <div className="genplan__inner_plashka">Школа</div>
                    </div>
                    <img src="img/genplan_img.jpg" />
                </div>
            </div>
        </div>
    )
}