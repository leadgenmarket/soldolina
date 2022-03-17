import React from "react"

export const Ipoteka = () => {

    const showPopup = (event) => {

        document.querySelector('.pu_rgba').style.display = "block"
        document.querySelectorAll('.pu_inner').forEach(el => {
            el.style.display = "none"
        })
        document.querySelector('.pu_get .tm b').innerHTML = event.target.getAttribute('data')
        document.querySelector('.pu_get').style.display = "block"
        document.querySelector('body').classList.add('overflow')
        document.querySelector('.pu_get .text').setAttribute('value', event.target.getAttribute('data'))
    }
    return (
        <div className="wmain">
            <div className="ipoteka">
                <div id="page1" class="tm tt"><b>Выгодная ипотека</b></div>
                <div className="tm_dop">
                    Для покупателей квартир в нашем комплексе доступны различные ипотечные программы, <br />а также покупка с использованием материнского капитала и военная ипотека.
                </div>
                <ul className="ipoteka__list">
                    <li data={"Получите расчет ежемесячного платежа по ипотеке 0,1 % на первый год"} onClick={showPopup}>0,1% на первый год</li>
                    <li data={"Получите расчет ежемесячного платежа по ипотеке от 8,2% на весь срок"} onClick={showPopup}>От 8,2% на весь срок</li>
                    <li data={"Получите расчет ежемесячного платежа по семейной ипотеке"} onClick={showPopup}>Семейная ипотека от 3,6%</li>
                    <li data={"Получите расчет ежемесячного платежа по ипотеке с гос.поддержкой от 4,7%"} onClick={showPopup}>С гос.поддержкой от 4,7%</li>
                    <li data={"Получите расчет ежемесячного платежа по ипотеке без первого взноса"} onClick={showPopup}>Без первого взноса</li>
                    <li data={"Получите расчет ежемесячного платежа по военной ипотеке"} onClick={showPopup}>Военная ипотека</li>
                </ul>
            </div>
        </div>
    )
}