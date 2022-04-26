import React, { useEffect } from "react"
import AOS from 'aos';
import "aos/dist/aos.css";
export const Genplans = () => {
    useEffect(()=>{
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
        
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 200, // values from 0 to 3000, with step 50ms
            duration: 700, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        
        });
    },[])
    return (<div className="genplan">
            <div className="wmain">
                <div className="tm tt">
                    Генплан комплекса
                </div>
            </div>
        <div className="genplan__inner">
            <div className="genplan__image">
                <img src="img/genplan_img.jpg" alt="Генплан" />
            </div>
            <div className="genplan__block green-block-1" data-aos="fade-up">
                <div className="genplan__block-text">
                    <span>2 очередь</span>
                    <br />В продаже
                </div>
            </div>
            <div className="genplan__block green-block-2" data-aos="fade-up">
                <div className="genplan__block-text">
                    <span>3 очередь</span>
                    <br />Проектирование
                </div>
            </div>
            <div className="genplan__block green-block-3" data-aos="fade-up">
                <div className="genplan__block-text">
                    <span>3 очередь</span>
                    <br />Проектирование
                </div>
            </div>
            <div className="genplan__block green-block-4" data-aos="fade-up">
                <div className="genplan__block-text">
                    <span>3 очередь</span>
                    <br />Проектирование
                </div>
            </div>
            <div className="genplan__block green-block-5" data-aos="fade-up">
                <div className="genplan__block-text">
                    <span>3 очередь</span>
                    <br />Проектирование
                </div>
            </div>
            <div className="genplan__block green-block-6" data-aos="fade-up">
                <div className="genplan__block-text">
                    <span>3 очередь</span>
                    <br />Проектирование
                </div>
            </div>
            <div className="genplan__block green-block-7" data-aos="fade-up">
                <div className="genplan__block-text">
                    <span>1 очередь</span>
                    <br />Дом сдан
                </div>
            </div>
            <div className="genplan__block green-block-8" data-aos="fade-up">
                <div className="genplan__block-text">
                    <span>1 очередь</span>
                    <br />Дом сдан
                </div>
            </div>
            <div className="genplan__block green-block-9" data-aos="fade-up">
                <div className="genplan__block-text">
                    <span>1 очередь</span>
                    <br />Дом сдан
                </div>
            </div>

            <div className="genplan__icon genplan__icon-1">
                <div className="genplan__icon-img">
                    <img src="img/shop.svg" alt="ТРЦ" />
                </div>
                <div className="genplan__icon-plashka">ТРЦ</div>
            </div>
            <div className="genplan__icon genplan__icon-2">
                <div className="genplan__icon-img">
                    <img src="img/school.svg" alt="Школа" />
                </div>
                <div className="genplan__icon-plashka">Школа</div>
            </div>
            <div className="genplan__icon genplan__icon-3">
                <div className="genplan__icon-img">
                    <img src="img/map_location_ico1.svg" alt="Сад" />
                </div>
                <div className="genplan__icon-plashka">Детский сад</div>
            </div>
        </div>
    </div>
    )
}