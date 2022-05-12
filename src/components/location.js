import React from "react"
import { YMaps, Map, ZoomControl, Placemark } from 'react-yandex-maps';

export const Locations = () => {
    return (
        <div className="location">
            <div id="page3" className="tm tt"><b>Уникальное расположение</b></div>
            <div className="location__time">
                <span><img src="img/location_ico.svg" /><div><b>1 минута </b>пешком до детского сада</div></span>
                <span><img src="img/location_ico.svg" /><div><b>5 минут </b>пешком до лесопарковой зоны</div></span>
                <span><img src="img/location_ico.svg" /><div><b>15 минут </b>пешком до ТЦ “Глобус” и “Касторамы”</div></span>
            </div>
            <div className="location__map">
                <div id="map1" style={{ width: "100%", height: "100%" }}>
                    <YMaps>
                        <div>
                            <Map defaultState={{ center: [55.934442, 38.020078], zoom: 15.2, controls: [] }} style={{ width: "100%", height: "100%", position: "absolute" }}  >
                                <ZoomControl options={{ float: 'left' }} />
                                <Placemark geometry={[55.934442, 38.027078]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 64],
                                        iconImageOffset: [-25, -64],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_location_ico0.svg',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.937412, 38.034669]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 64],
                                        iconImageOffset: [-25, -64],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_location_ico1.svg',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.931758, 38.005815]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 64],
                                        iconImageOffset: [-25, -64],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_location_ico4.svg',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.929477, 38.004168]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 64],
                                        iconImageOffset: [-25, -64],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_location_ico3.svg',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.930229, 38.016951]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 64],
                                        iconImageOffset: [-25, -64],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_location_ico2.svg',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                            </Map>
                        </div>
                    </YMaps>
                </div>
                {/*<div className="location__wiev_plan">Смотреть все планировки</div>*/}
            </div>
            <div className="location__map_info">
                <p> В жилом комплексе будет построена новая школа, а пока строительство не завершено <b>застройщик оплачивает школьный автобус для детей</b>, проживающих в “Солнечной Долине”</p>
                <p>В районе жилого комплекса будет построен новый торговый центр с ресторанами и кинотеатром.</p>
            </div>
        </div >
    )
}