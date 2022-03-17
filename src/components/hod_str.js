import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick"
import "./css/slick.min.css"
import "./css/slick-theme.min.css"





export const Hod_str = () => {
    const slider = useRef(null);
    const [hod_a, setHod_a] = useState(null);
    const [active, setActive] = useState({
        year: null,
        month: null,
        photos: []
    })
    const [photos, setPhotos] = useState([])


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // responsive: [
        //     {
        //         breakpoint: 1150,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             variableWidth: false,
        //         }
        //     }
        // ],
        // draggable: false,
    };


    useEffect(() => {
        const headers = { 'Content-Type': 'application/json' }
        fetch(process.env.REACT_APP_BACKEND_URL + "/hod_react.php", headers)
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                setHod_a(result)

                let year = Object.keys(result.struct)[Object.keys(result.struct).length - 1]
                let month = Object.keys(result.struct[year])[Object.keys(result.struct[year]).length - 1]
                let photos = result.photos[year + "_" + month]

                setActive({
                    year: year,
                    month: month,
                    photos: photos
                })

                setPhotos(photos)
            })

    }, [])

    if (hod_a == null || active.year == null) {
        return <div>loading</div>
    }

    const yearClick = (e) => {
        e.preventDefault()
        let tmp = active
        tmp.year = e.currentTarget.getAttribute('data')
        tmp.month = Object.keys(hod_a.struct[tmp.year])[Object.keys(hod_a.struct[tmp.year]).length - 1]
        tmp.photos = hod_a.photos[tmp.year + "_" + tmp.month]

        setActive(tmp)
        setPhotos(tmp.photos)
    }
    const monthClick = (e) => {
        e.preventDefault()
        let tmp = active
        tmp.month = e.currentTarget.getAttribute('data')
        tmp.photos = hod_a.photos[tmp.year + "_" + tmp.month]
        setActive(tmp)
        setPhotos(tmp.photos)
    }

    const monthName = (month) => {
        let name = ''
        switch (month) {
            case '1':
                name = "Январь"
                break
            case '2':
                name = "Февраль"
                break
            case '3':
                name = "Март"
                break
            case '4':
                name = "Апрель"
                break
            case '5':
                name = "Май"
                break
            case '6':
                name = "Июнь"
                break
            case '7':
                name = "Июль"
                break
            case '8':
                name = "Август"
                break
            case '9':
                name = "Сентябрь"
                break
            case '10':
                name = "Октябрь"
                break
            case '11':
                name = "Ноябрь"
                break
            case '12':
                name = "Декабрь"
                break
        }
        return name
    }


    return (
        <section className="deal">
            <div className="tm tt"><b>Надежная сделка</b></div>
            <div className="tm_dop">
                Жилой комплекс строится по ФЗ 214 с использованием проектного финансирования <br />и эскроу счетов. Со всей документацией по объекту вы можете ознакомиться на <br />сайте Единой информационной системы жилищного строительства наш.дом.рф
            </div>
            <div className="deal__nav">
                <ul className="deal__nav_list">
                    {Object.keys(hod_a.struct).reverse().map((year) => {
                        return <li className={active.year == year ? "act" : ""} data={year} onClick={yearClick}>{year}</li>
                    })}
                </ul>
                <ul className="deal__nav_list">
                    {Object.keys(hod_a.struct[active.year]).reverse().map((month) => {
                        return <li href="#" onClick={monthClick} data={month} className={active.month == month ? "act" : ""}>{monthName(month)}</li>
                    })}
                </ul>
            </div>
            <Slider ref={slider} className="deal__img" {...settings}>
                {photos ? photos.map((photo) => {
                    return <a href="#">
                        <img src={process.env.REACT_APP_BACKEND_URL + "/" + photo} />
                    </a>
                }) : ""}
            </Slider>
            {
                /*
                Стрелки для слайдера
                <div class="hod_nav_el">
                    <div class="hod_nav_l" onClick={() => { slider.current.slickPrev() }}></div>
                    <div class="hod_nav_r" onClick={() => { slider.current.slickNext() }}></div>
                </div>*/
            }
        </section>
    )
}