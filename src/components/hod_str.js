import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick"
import "./css/slick.min.css"
import "./css/slick-theme.min.css"
import { LightgalleryProvider, LightgalleryItem, useLightgallery } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";





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
        speed: 300,
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
                name = "????????????"
                break
            case '2':
                name = "??????????????"
                break
            case '3':
                name = "????????"
                break
            case '4':
                name = "????????????"
                break
            case '5':
                name = "??????"
                break
            case '6':
                name = "????????"
                break
            case '7':
                name = "????????"
                break
            case '8':
                name = "????????????"
                break
            case '9':
                name = "????????????????"
                break
            case '10':
                name = "??????????????"
                break
            case '11':
                name = "????????????"
                break
            case '12':
                name = "??????????????"
                break
        }
        return name
    }


    return (
        <section className="deal">
            <div className="tm tt"><b>???????????????? ????????????</b></div>
            <div className="tm_dop">
                ?????????? ???????????????? ???????????????? ???? ???? 214 ?? ???????????????????????????? ???????????????????? ???????????????????????????? <br />?? ???????????? ????????????. ???? ???????? ?????????????????????????? ???? ?????????????? ???? ???????????? ???????????????????????? ???? <br />?????????? ???????????? ???????????????????????????? ?????????????? ?????????????????? ?????????????????????????? <a target="_blank" href="https://xn--80az8a.xn--d1aqf.xn--p1ai/">??????.??????.????</a>
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
            <LightgalleryProvider style={{ display: "none" }}>
                <Slider ref={slider} className="deal__img" {...settings}>
                    {photos ? photos.map((photo) => {
                        return <a href="#">
                            <LightgalleryItem key={photo} src={process.env.REACT_APP_BACKEND_URL + "/" + photo.replace('m.jpg', '.jpg')} thumb={process.env.REACT_APP_BACKEND_URL + "/" + photo}> 
                                <img src={process.env.REACT_APP_BACKEND_URL + "/" + photo} />
                            </LightgalleryItem>
                        </a>
                    }) : ""}
                </Slider>
            </LightgalleryProvider>
            {
                /*
                ?????????????? ?????? ????????????????
                <div class="hod_nav_el">
                    <div class="hod_nav_l" onClick={() => { slider.current.slickPrev() }}></div>
                    <div class="hod_nav_r" onClick={() => { slider.current.slickNext() }}></div>
                </div>*/
            }
        </section>
    )
}