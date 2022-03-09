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
        <section class="hl_top">
            <div class="logo">Солнечная долина</div>
            <div class="hl_nav">
                <a href="#page1">Ипотека от 0,1 %</a>
                <a href="#page2">Планировки и цены</a>
                <a href="#page3">Инфраструктура</a>
                <a href="#page4">Контакты</a>
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