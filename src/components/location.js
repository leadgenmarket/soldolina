import React from "react"
import { YMaps, Map, ZoomControl, Placemark } from 'react-yandex-maps';

export const Locations = () => {
    return (
        <div class="wmain">
            <div class="location">
                <div id="page3" class="tm tt"><b>Уникальное расположение</b></div>
                <div class="location__time">
                    <span><img src="img/location_ico.svg" /><div><b>1 минута </b>пешком до детского сада</div></span>
                    <span><img src="img/location_ico.svg" /><div><b>5 минут </b>пешком до леспорковой зоны</div></span>
                    <span><img src="img/location_ico.svg" /><div><b>15 минут </b>пешком до ТЦ “Глобус” и “Касторамы”</div></span>
                </div>
                <div class="location__map">
                    <div id="map1" style={{ width: "100%", height: "100%" }}>
                        <YMaps>
                            <div>
                                <Map defaultState={{ center: [55.76043281902053, 37.635583022515924], zoom: 16.2, controls: [] }} style={{ width: "100%", height: "100%", position: "absolute" }}  >
                                    <ZoomControl options={{ float: 'left' }} />
                                    <Placemark geometry={[55.760510100343694, 37.63663440608215]}
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
                                    <Placemark geometry={[55.76125554319915, 37.634536961000144]}
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
                                    <Placemark geometry={[55.760202937090135, 37.63479445306556]}
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
                                    <Placemark geometry={[55.75878126860425, 37.6348373684098]}
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
                                    <Placemark geometry={[55.75964637520166, 37.639440039079346]}
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
                                </Map>
                            </div>
                        </YMaps>
                    </div>
                    <div class="location__wiev_plan">Смореть все планировки</div>
                </div>
                <div class="location__map_info">
                    <p> В жилом комплексе будет построена новая школа, а пока строительство не завершено <b>застройщик оплачивает школьный автобус для детей</b>, проживающих в “Солнечной Долине”</p>
                    <p>В районе жилого комплекса будет построен новый торговый центр с ресторанами и кинотеатром.</p>
                </div>
            </div >
        </div>
    )
}