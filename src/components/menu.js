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

    const handleScroll = (event) => {

        let lastPosition = parseInt(document.querySelector('html').getAttribute('lastPosition'))
        if (lastPosition != undefined) {
            if (lastPosition < window.scrollY + 100) {
                //console.log('down')
                document.querySelectorAll('section').forEach((section) => {
                    if (window.scrollY + (window.innerHeight / 2.5) > section.offsetTop && !section.classList.contains('showed')) {
                        section.classList.add('showed')
                    }
                })
            } else {
                //console.log('up')
            }
        }
        document.querySelector('html').setAttribute('lastPosition', window.scrollY)
    }

    const clickMenu = (e) => {
        e.preventDefault()
        let popup = e.currentTarget.getAttribute("href")
        if (blocks.blocks < 20) {
            blocks.setMenuClick(true)
            blocks.setBlocks(20)
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


    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);

    }, [])

    return (
        <section className="menu">
            <div className="cw_main">
                <div className="menu_btn" onClick={showPopup} data="popup_menu"><span>Меню</span></div>
                <logo><img src="images/logo.jpg" /></logo>
                <div className="top_menu">
                    <a href="how_buy" onClick={clickMenu}><span>Ипотека</span></a>
                    <a href="plan_price" onClick={clickMenu}><span>Планировки и цены</span></a>
                    <a href="park_get_flat" onClick={clickMenu}><span>Инфраструктура</span></a>
                    <a href="contacts" onClick={clickMenu}><span>Контакты</span></a>
                </div>
                <div className="menu_right">
                    <a className="call_phone roistat-phone" href="tel:+84959880202">8 495 988 02 02</a>
                </div>
            </div>
        </section>
    )
}