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
                <img class="header_bg" src="img/header_bg.jpg" />
                <img class="header_bg_mobile" src="img/header_bg_mobile.jpg" />
                <div class="header_content">
                    <div class="head_title">
                        Квартиры в новом <br />микрорайоне города <br />Щелково от 4 млн ₽
                    </div>
                    <div class="head_map_info">
                        <span>Детский сад во дворе</span>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}