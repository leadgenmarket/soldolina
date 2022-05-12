import React, { useContext, useEffect } from 'react'
import { BlocksContext } from "../context/blocksContext"

export const Menu = () => {
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

    const clickMenu = (e) => {
        e.preventDefault()
        let popup = e.currentTarget.getAttribute("href")
        if (blocks.blocks < 15) {
            blocks.setMenuClick(true)
            blocks.setBlocks(15)
            setTimeout(() => {
                window.scrollTo({
                    top: document.querySelector("." + popup).offsetTop,
                    behavior: "smooth"
                })
                setTimeout(() => {
                    blocks.setMenuClick(false)
                }, 500)


            }, 1200)

        } else {
            window.scrollTo({
                top: document.querySelector("." + popup).offsetTop,
                behavior: "smooth"
            })
        }
    }

    return (
        <section class="hl_top">
            <div class="logo">Солнечная долина</div>
            <div class="hl_nav">
                <a href="ipoteka" onClick={clickMenu}>Ипотека</a>
                <a href="flat" onClick={clickMenu}>Планировки и цены</a>
                <a href="invest" onClick={clickMenu}>Инфраструктура</a>
                <a href="contact" onClick={clickMenu}>Контакты</a>
            </div>
            <a class="hl_phone roistat-phone" href="tel:84959880202">8 495 988 02 02</a>
            <div class="mob_menu_ico">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>

    )
}