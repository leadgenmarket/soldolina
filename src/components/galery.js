import React, { useState } from 'react'
import Slider from "react-slick"
import "./css/slick.min.css"
import "./css/slick-theme.min.css"





export const Galery = () => {
    const [counter, setCounter] = useState(1)
    const imagesCnt = 17


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        // variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCounter(next + 1)
    };


    return (
        <section className="galery">
            <div className="cw_main">
                <div className="gl_left">
                    <div className="tm">
                        Галерея<br />  <span><l>комплекса</l></span>
                    </div>
                    <p>Современная архитектура домов, премиальные материалы отделки, единая стилистическая концепция проекта создают особую атмосферу комфорта, уюта и спокойствия.</p>
                    <div className="gal_counter"><b>{counter < 10 ? +counter : counter}</b><span>{imagesCnt}</span></div>
                </div>
                <div className="gl_right">
                    <Slider className="gl_slid" {...settings}>
                        {Array.from(Array(imagesCnt).keys()).map((key) => {
                            return <div className="gl_in"><img src={`/images/gal/${key + 1}.jpg`} /></div>
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    )
}