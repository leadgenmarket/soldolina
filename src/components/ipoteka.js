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
                    <li data={"Получите расчет ежемесячного платежа по ипотеке"} onClick={showPopup}>Ипотека для всех 8%</li>
                    {/* <li data={"Получите расчет ежемесячного платежа по ипотеке с гос.поддержкой 4,75%"} onClick={showPopup}>С гос.поддержкой от 4,75%</li> */}
                    <li data={"Получите расчет ежемесячного платежа по семейной ипотеке"} onClick={showPopup}>Семейная ипотека от 2,5%</li>
                    <li data={"Получите расчет ежемесячного платежа по военной ипотеке"} onClick={showPopup}>Военная ипотека</li>
                    {/* <li data={"Получите расчет ежемесячного платежа по ипотеке без первого взноса"} onClick={showPopup}>Без первого взноса</li> */}
                </ul>
            </div>
        </div>
    )
}