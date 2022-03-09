import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick"
import "./css/slick.min.css"
import "./css/slick-theme.min.css"





export const Hod_str = () => {
    const url = "https://sunny-park.ru/"
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
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                }
            }
        ],
        // draggable: false,
    };


    useEffect(() => {
        const headers = { 'Content-Type': 'application/json' }
        fetch(url + "/hod_react.php", headers)
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
        <section className="hod_str">
            <div className="hod_dec"></div>
            <div className="hod_right">
                <div className="tm">
                    <span><l>Надежная</l></span> и <br /> безопасная сделка
                </div>
                <p>Жилой комплекс строится по ФЗ 214 с использованием проектного финансирвоания и эксроу-счетов. Со всей документацией по объекту вы можете ознакомиться на сайте Единой информационной системы жилищного строительства <a href="https://наш.дом.рф/сервисы/каталог-новостроек/список-объектов/список?&devId=7851&objStatus=0" target="blank_">наш.дом.рф</a></p>
            </div>
            <div className="hod_left">
                <Slider className="hod_slid" {...settings}>
                    {photos ? photos.map((photo) => {
                        return <div className="hod_in">
                            <img src={url + photo} />
                        </div>
                    }) : ""}
                </Slider>
                <div className="hod_nav">
                    <div className="year_list">
                        {Object.keys(hod_a.struct).reverse().map((year) => {
                            return <a href="#" className={active.year == year ? "act" : ""} data={year} onClick={yearClick} data={year}><span>{year}</span></a>
                        })}
                    </div>
                    <div className="month_list">
                        {Object.keys(hod_a.struct[active.year]).reverse().map((month) => {
                            return <a href="#" onClick={monthClick} data={month} className={active.month == month ? "act" : ""}><span>{monthName(month)}</span></a>
                        })}
                    </div>
                </div>
            </div>
            <div className="clr"></div>
        </section>
    )
}