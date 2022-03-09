import React, { useContext } from 'react'
import { BlocksContext } from "../context/blocksContext"

export const Header = () => {
    const blocks = useContext(BlocksContext)

    const showPopup = (e) => {
        e.preventDefault()
        document.querySelector('body').classList.add('overflow')
        document.querySelector('.popup_rgba').style.display = "block"
        document.querySelectorAll('.popup_main').forEach(el => {
            el.style.display = "none"
        });
        console.log(e.currentTarget.getAttribute('data'))
        document.querySelector('.' + e.currentTarget.getAttribute('data')).style.display = "block"
    }

    return (
        <React.Fragment>
            <section className="header">
                <div className="cw_main">
                    <div className="hd_inner">
                        <h1>просторные <br /> Квартиры <span><l>бизнес-класса</l></span> <br /> с видом на парк</h1>
                        <div className="hd_loc"><span>г. Щелково</span>, 38 минут до центра Москвы</div>
                        <div className="hd_info">от  5.6  млн. ₽</div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}