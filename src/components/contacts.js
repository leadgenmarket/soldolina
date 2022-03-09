import React, { useEffect, useState } from 'react'
import { YMaps, Map, ZoomControl, Placemark } from 'react-yandex-maps';

export const Contacts = () => {
    const [phone, setPhone] = useState("")
    useEffect(() => {
        setPhone(document.querySelector('.roistat-phone').innerHTML)
    }, [])

    return (
        <section className="contacts">
            <div className="cw_main">
                <div className="cont_info">
                    <div className="tm">
                        Офис продаж<br /> <span><l>и контакты</l></span>
                    </div>
                    <div className="cont_addr">
                        <span>Адрес</span>
                        <p>Щелково,  Центральная ул. 71/1 (дальний вход в магазин ДА)</p>
                    </div>
                    <div className="cont_phone">
                        <span>Телефон</span>
                        <a className="roistat-phone" href={`tel:${phone.replaceAll(' ', '')}`}>{phone}</a>
                    </div>
                    <div className="cont_time">
                        <span>Время работы</span>
                        <p>пн-пт:  10:00 - 21:00;  <br /> сб-вск: 10:00 - 20:00</p>
                    </div>
                </div>
                <div className="cont_map">
                    <div id="map">
                        <YMaps>
                            <div>
                                <Map defaultState={{ center: [55.926317, 37.962464], zoom: 16, controls: [] }} style={{ width: "100%", height: "100%", position: "absolute" }}  >
                                    <ZoomControl options={{ float: 'left' }} />
                                    <Placemark geometry={[55.926317, 37.962464]}
                                        options={{
                                            iconLayout: 'default#image',
                                            hideIconOnBalloonOpen: false,
                                            iconImageSize: [90, 82],
                                            iconImageOffset: [-20, -54],
                                            cursor: 'default',
                                            iconShadow: true,
                                            balloonclose: true,
                                            iconImageHref: 'images/map_icon.png',
                                            balloonPanelMaxMapArea: 0,
                                        }}
                                    />
                                </Map>
                            </div>
                        </YMaps>
                    </div>
                </div>

            </div>
        </section>
    )
}