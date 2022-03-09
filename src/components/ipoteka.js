import React from "react"

export const Ipoteka = () => {
    return (
        <div className="wmain">
            <div className="ipoteka">
                <div id="page1" class="tm tt"><b>Выгодная ипотека</b></div>
                <div className="tm_dop">
                    Для покупателей квартир в нашем комплексе доступны различные ипотечные программы, <br />а также покупке с использованием материнского капитала и военная ипотека.
                </div>
                <ul className="ipoteka__list">
                    <li>0,1% на первый год</li>
                    <li>От 8,2% на весь срок</li>
                    <li>Семейная ипотека от 3,6%</li>
                    <li>С господдержкой от 4,7%</li>
                    <li>Без первого взноса</li>
                    <li>Военная ипотека</li>
                </ul>
            </div>
        </div>
    )
}