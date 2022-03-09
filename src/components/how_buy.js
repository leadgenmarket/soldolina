import React, { useContext } from 'react'

export const How_buy = () => {

    const showPopup = (e) => {
        e.preventDefault()
        document.querySelector('body').classList.add('overflow')
        document.querySelector('.popup_rgba').style.display = "block"
        document.querySelectorAll('.popup_main').forEach(el => {
            el.style.display = "none"
        });
        let popup = e.currentTarget.getAttribute('data')
        let text = e.currentTarget.getAttribute('data-text')
        document.querySelector('.' + popup).style.display = "block"
        document.querySelector('.' + popup + ' .pu_tm sub').innerHTML = text
        document.querySelector('.' + popup + ' input.text').value = 'Получить расчет по ипотеке (' + text.toLowerCase() + ')'
    }


    return (
        <section className="how_buy">
            <div className="cw_main">
                <div className="tm">
                    <span><l>Выгодная <br /> ипотека</l></span>
                </div>
                <div className="hb_txt dec_text">
                    <b><img src="images/hb_icon.svg" /></b>
                    <span> Для покупателей квартир в нашем комплексе доступны различные ипотечные программы, а также покупке с использованием материнского капитала и военная ипотека.</span>
                </div>
                <div className="hb_list">
                    {/* <div className="hb_in" data-text={"0,1% на первый год"} onClick={showPopup} data="pu_ipot">
                        <div className="hb_img"><img src="/images/hb_ipot_01.svg" /></div>
                        <div className="hb_info">
                            <div className="ipot_name"><span>0,1% на первый год</span></div>
                            <span>С эскроу и проектным финансированием банка</span>
                            <a href="#">Подробнее</a>
                        </div>
                    </div> */}
                    <div className="hb_in" data-text={"от 6% на весь срок"} onClick={showPopup} data="pu_ipot">
                        <div className="hb_img"><img src="/images/hb_ipot_6.svg" /></div>
                        <div className="hb_info">
                            <div className="ipot_name"><span>Ипотека</span></div>
                            <span>С эскроу и проектным финансированием банка</span>
                            <a href="#">Подробнее</a>
                        </div>
                    </div>
                    <div className="hb_in" data-text={"по семейной ипотеке"} onClick={showPopup} data="pu_ipot">
                        <div className="hb_img"><img src="/images/hb_ipot_family.svg" /></div>
                        <div className="hb_info">
                            <div className="ipot_name"><span>Семейная ипотека 3,6%</span></div>
                            <span>С эскроу и проектным финансированием банка</span>
                            <a href="#">Подробнее</a>
                        </div>
                    </div>
                    <div className="hb_in" data-text={"Без первого взноса"} onClick={showPopup} data="pu_ipot">
                        <div className="hb_img"><img src="/images/hb_vznos.svg" /></div>
                        <div className="hb_info">
                            <div className="ipot_name"><span>Без первого взноса</span></div>
                            <span>С эскроу и проектным финансированием банка</span>
                            <a href="#">Подробнее</a>
                        </div>
                    </div>
                    <div className="hb_in" data-text={"С господдержкой"} onClick={showPopup} data="pu_ipot">
                        <div className="hb_img"><img src="/images/hb_ipot_support.svg" /></div>
                        <div className="hb_info">
                            <div className="ipot_name"><span>С господдержкой 4,75%</span></div>
                            <span>С эскроу и проектным финансированием банка</span>
                            <a href="#">Подробнее</a>
                        </div>
                    </div>
                    <div className="hb_in" data-text={"Военная ипотека"} onClick={showPopup} data="pu_ipot">
                        <div className="hb_img"><img src="/images/hb_ipot_military.svg" /></div>
                        <div className="hb_info">
                            <div className="ipot_name"><span>Военная ипотека</span></div>
                            <span>С эскроу и проектным финансированием банка</span>
                            <a href="#">Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}