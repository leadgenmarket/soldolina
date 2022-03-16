import React, { useRef, useState } from "react"
import Slider from "react-slick"
import "./css/slick.min.css"
import "./css/slick-theme.min.css"

export const Gallery = () => {
    const slider = useRef(null);
    const photos = [
        "img/gallery_th_img1.jpg",
        "img/gallery_th_img2.jpg",
        "img/gallery_th_img3.jpg",
        "img/gallery_th_img4.jpg",
        "img/gallery_th_img5.jpg",
        "img/gallery_th_img6.jpg",
        "img/gallery_th_img7.jpg",
        "img/gallery_th_img8.jpg",
        "img/gallery_th_img9.jpg",
        "img/gallery_th_img10.jpg",
        "img/gallery_th_img11.jpg",
        "img/gallery_th_img12.jpg",
    ];

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
		variableWidth: false,
        arrows: true,
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

    /*const [image, setImage] = useState(process.env.REACT_APP_BACKEND_URL + "/img/gallery_big_img1.jpg")

    const imageClick = (e) => {
        e.preventDefault()
        let image = process.env.REACT_APP_BACKEND_URL + '/' + e.currentTarget.getAttribute('data')
        console.log(image)
        setImage(image)
    }*/
    return (
        <div className="wmain">
            <div class="gallery">
                <div class="tm tt"><b>Галерея комплекса</b></div>
                <div class="tm_dop">
                    Гармоничное сочетание городского и загородного ландшафта, современная <br />архитектура, качественные материалы создают настоящий комфорт для каждого!
                </div>
                <div class="gallery__content">
                    <Slider ref={slider} className="gallery__big" {...settings}>
                        {photos ? photos.map((photo) => {
                            return <img src={process.env.REACT_APP_BACKEND_URL + "/" + photo} />
                        }) : ""}
                    </Slider>
                    {/*<div class="gallery__big"><img src={image} /></div>
                    <div class="gallery__th">
                        <a href="#" onClick={imageClick} data={"img/gallery_big_img1.jpg"}><img src="img/gallery_th_img1.jpg" /></a>
                        <a href="#" onClick={imageClick} data={"img/gallery_big_img2.jpg"}><img src="img/gallery_th_img2.jpg" /></a>
                        <a href="#" onClick={imageClick} data={"img/gallery_big_img3.jpg"}><img src="img/gallery_th_img3.jpg" /></a>
                        <a href="#" onClick={imageClick} data={"img/gallery_big_img4.jpg"}><img src="img/gallery_th_img4.jpg" /></a>
                        <a href="#" onClick={imageClick} data={"img/gallery_big_img5.jpg"}><img src="img/gallery_th_img5.jpg" /></a>
                        <a href="#" onClick={imageClick} data={"img/gallery_big_img6.jpg"}><img src="img/gallery_th_img6.jpg" /></a>
                        <a href="#" onClick={imageClick} data={"img/gallery_big_img7.jpg"}><img src="img/gallery_th_img7.jpg" /></a>
                        <a href="#" onClick={imageClick} data={"img/gallery_big_img8.jpg"}><img src="img/gallery_th_img8.jpg" /></a>
                        <a href="#" onClick={imageClick} data={"img/gallery_big_img9.jpg"}><img src="img/gallery_th_img9.jpg" /></a>
                        <a href="#" onClick={imageClick} data={"img/gallery_big_img10.jpg"}><img src="img/gallery_th_img10.jpg" /></a>
                        <a href="#" onClick={imageClick} data={"img/gallery_big_img11.jpg"}><img src="img/gallery_th_img11.jpg" /></a>
                        <a href="#" onClick={imageClick} data={"img/gallery_big_img12.jpg"}><img src="img/gallery_th_img12.jpg" /></a>
                        <a href="#" onClick={imageClick} data={"img/gallery_big_img13.jpg"}><img src="img/gallery_th_img13.jpg" /></a>
                    </div>*/}
                </div>
            </div>
        </ div>
    )
}