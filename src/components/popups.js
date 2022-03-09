import { React, useEffect, useState, useRef, useContext } from 'react';
import TextField from '@material-ui/core/TextField'
import NativeSelect from '@material-ui/core/NativeSelect';
import Slider from "react-slick"
import Slider1 from '@material-ui/core/Slider';
import InputMask from 'react-input-mask'
import Typography from '@material-ui/core/Typography';
import { useSendForm } from '../hooks/send-from.hook'
import { BlocksContext } from "../context/blocksContext"
import parse from 'html-react-parser'
import { FlatsContext } from '../context/flatsContext';
import { LightgalleryProvider, LightgalleryItem, useLightgallery } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import { PhoneInput } from './phone_input';

export const Popups = () => {
    const url = "https://sunny-park.ru"
    const slider = useRef(null);
    const [counter, setCounter] = useState(1)
    const sendForm = useSendForm();
    const blocks = useContext(BlocksContext)
    const [floor, setFloor] = useState(5);
    const [srokIpot, setSrokIpot] = useState("")
    const [pervSrok, setPervSrok] = useState("")
    const [pervIpot, setPervIpot] = useState("")
    const [pervRassr, setPervRassr] = useState("")
    const [parking, setParking] = useState();
    const [parkingCounter, setParkingCounter] = useState(1)
    const [kellerCounter, setKellerCounter] = useState(1)
    const [questionText, setQuestionText] = useState("")
    const [keller, setKeller] = useState();
    const [time, setTime] = useState();
    const floorSelector = useRef(null);
    const close = (e) => {
        e.preventDefault()
        if (e.currentTarget.classList.contains("return")) {
            document.querySelector('.pu_liter').style.display = "block"
            document.querySelector('.pu_flat').style.display = "none"
            e.currentTarget.classList.remove("return")
        } else {
            document.querySelector('body').classList.remove('overflow')
            document.querySelector('.popup_rgba').style.display = "none"
            document.querySelectorAll('.popup_main').forEach(el => {
                el.style.display = "none"
            });
        }
    }



    const handleChange = (event, newValue) => {
        setFloor(newValue);
    };


    const flats = useContext(FlatsContext)

    function isDescendant(child) {
        var node = child.parentNode;
        while (node.classList != undefined) {
            if (node.classList.contains('popup_main')) {

                return true;
            }
            node = node.parentNode;
        }
        return false;
    }

    var settingsKeller = {
        infinite: false,
        beforeChange: (current, next) => {
            setKellerCounter(next + 1)
        }
        // asNavFor
    };

    var settingsParking = {
        infinite: false,
        beforeChange: (current, next) => {
            setParkingCounter(next + 1)
        }
        // asNavFor
    };

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


            }, 2000)



        } else {
            window.scrollTo({
                top: document.querySelector("." + popup).offsetTop,
                behavior: "smooth"
            })
        }
        document.querySelector('body').classList.remove('overflow')
        document.querySelector('.popup_rgba').style.display = "none"
        document.querySelectorAll('.popup_main').forEach(el => {
            el.style.display = "none"
        });

    }

    const textFieldChange = (e) => {
        setQuestionText(e.target.value)
    }

    const timeFieldChange = (e) => {
        setTime(e.target.value)
    }

    const kvTitle = (classKv) => {
        switch (classKv) {
            case "0":
                return "Квартира-студия"
            case "1":
                return "Однокомнатная"
            case "2":
                return "Двухкомнатная"
            case "3":
                return "Трехкомнатаная"
        }
    }

    const flatClick = (e) => {
        e.preventDefault()
        let id = parseInt(e.target.getAttribute('id'))
        let flat
        const headers = { 'Content-Type': 'application/json' }
        fetch(url + "/flats_react.php?id=" + id, headers)
            .then(res => res.json())
            .then((result) => {
                flat = result
                console.log(result)
                document.querySelector('.pu_liter').style.display = "none"
                document.querySelector('.pu_flat').style.display = "block"
                document.querySelector('.pu_flat .closeform').classList.add('return')
                document.querySelector('.pu_flat .flat_img img').setAttribute('src', url + '/' + result.img)
                document.querySelector('.pu_flat .pu_tm l').innerHTML = kvTitle(result.class)
                document.querySelector('.area span i').innerHTML = flat.info
                document.querySelectorAll('.area span i')[1].innerHTML = flat.zhil
                document.querySelector('.pu_flat input.text').value = `Узнать стоимость квратиры Литер - ${document.querySelector('.pu_liter').getAttribute('liter')} Этаж - ${floor}  Жилая площадь - ${flat.info}`
            })
    }



    useEffect(() => {
        if (document.querySelector('.blocks') != null) {
            document.querySelector('.blocks').addEventListener('click', (e) => {
                let clicked = e.target
                if (!clicked.classList.contains('popup_main') && !isDescendant(clicked) && e.target.nodeName.toLowerCase() != 'canvas') {
                    document.querySelector('body').classList.remove('overflow')
                    document.querySelector(".popup_rgba").style.display = "none";
                    document.querySelectorAll('.popup_main').forEach(el => {
                        el.style.display = "none"
                    });
                }
            })
        }
    }, [])

    useEffect(() => {
        if (flats.activeFlat != null) {

            if (counter != 1) {
                slider.current.slickGoTo(0)
            }
            setTimeout(() => {
                document.querySelectorAll('.pu_plan_slid_wrap')[1].style.display = "block"
            }, 500)
        }
    }, [flats.activeFlat])

    const floorClick = (event) => {
        event.preventDefault()
        let floor = event.currentTarget.getAttribute('data')
        let liter = document.querySelector(".pu_floor .pu_tm span").innerText.split('№')[1];
        document.querySelectorAll('.floor_img').forEach((floor) => {
            floor.style.display = "none"
        })
        if (parseInt(floor) >= 10) {
            document.querySelector('.floor_img.l' + liter + "_e10_25").style.display = "inline-block"
        } else {
            document.querySelector('.floor_img.l' + liter + "_e" + floor).style.display = "inline-block"
        }
        document.querySelectorAll('.sel_fl_el').forEach((sel) => {
            sel.classList.remove('act')
        })
        event.currentTarget.classList.add('act')
    }

    const floorSelect = (event) => {
        const floor = event.target.value.split(' ')[0]

        let liter = document.querySelector(".pu_floor .pu_tm span").innerText.split('№')[1];

        console.log('.floor_img.l' + liter + "_e" + floor)
        document.querySelectorAll('.floor_img').forEach((floor) => {
            floor.style.display = "none"
        })
        if (parseInt(floor) >= 10) {
            document.querySelector('.floor_img.l' + liter + "_e10_25").style.display = "inline-block"
        } else {
            //console.log(document.querySelector('.floor_img.l'+liter+"_e"+floor))
            document.querySelector('.floor_img.l' + liter + "_e" + floor).style.display = "inline-block"
        }
        document.querySelectorAll('.sel_fl_el').forEach((sel) => {
            sel.classList.remove('act')
        })
    }

    var settings = {
        beforeChange: (current, next) => {
            setCounter(next + 1)
        }
        // asNavFor
    };

    const entranceClick = (e) => {
        let liter = document.querySelector('.pu_liter').getAttribute('liter')
        let entrance = e.target.getAttribute('data')
        document.querySelectorAll('.entr_in').forEach((el) => {
            el.classList.remove('act')
        })
        e.currentTarget.classList.add('act')
        document.querySelectorAll('.pu_liter .liter_img').forEach((el) => {
            el.style.display = "none"
        })
        document.querySelector('.pu_liter .liter_img[data="' + liter + '"][entrance="' + entrance + '"]').style.display = 'block'
    }


    return (
        <section className="popups popup_rgba" style={{ display: "none" }}>
            <div className="popup_table">
                <div className="popup_cell">

                    <div className="popup_main popup_menu" style={{ display: "none" }}>
                        <a href="#" className="closeform" onClick={close}></a>
                        <div className="menu_list">
                            <a href="near_house" onClick={clickMenu}><span>Ипотека от 0,1 %</span></a>
                            <a href="plan_price" onClick={clickMenu}><span>Планировки и цены</span></a>
                            <a href="how_buy" onClick={clickMenu}><span>Инфраструктура</span></a>
                            <a href="contacts" onClick={clickMenu}><span>Контакты</span></a>
                        </div>
                    </div>

                    <div className="popup_main pu_thx" style={{ display: "none" }}>
                        <a href="#" className="closeform" onClick={close}></a>
                        <div className="pu_tm">
                            <span><l>Спасибо</l></span>
                            <sub>В ближайшее время с вами <br /> свяжется наш специалист</sub>
                        </div>
                    </div>

                    <div className="popup_main pu_call" style={{ display: "none" }}>
                        <a href="#" className="closeform" onClick={close}></a>
                        <div className="pu_tm">
                            <span>Заказать звонок</span>
                        </div>
                        <form className="pu_form">
                            <div className="form_in react_input_style">
                                <TextField name="name" label="Ваше имя" className="pu_name" />
                            </div>
                            <div className="form_in react_input_style">
                                <InputMask mask="+7\ (999) 999-99-99" name="phone" maskChar={null}>
                                    <TextField name="phone" label="Ваш телефон" className="pu_phone" />
                                </InputMask>
                            </div>
                            <div className="form_in react_input_style">
                                <TextField onChange={timeFieldChange} name="name" label="Удобное время для звонка" className="pu_time" />
                            </div>
                            <input type="hidden" class="text" value="Заказать звонок" />
                            <input type="hidden" className="dop-info" data="Удобное время звонка" value={time} />
                            <button className="pu_btn" celtype="getCall" onClick={sendForm.sendForm}>Заказать звонок</button>
                        </form>
                    </div>

                    <div className="popup_main pu_ipot" style={{ display: "none" }}>
                        <a href="#" className="closeform" onClick={close}></a>
                        <div className="pu_tm">
                            <span><l>Получите расчет</l></span> ежемесячного платежа
                            <sub>по ипотеке с господдержкой</sub>
                        </div>
                        <form className="pu_form">
                            <NativeSelect
                                onChange={(event) => { setPervIpot(event.target.value) }} className="form_in react_select_style input_vznos">
                                <option value={""}>Первоначальный взнос</option>
                                <option value={"10%"}>10%</option>
                                <option value={"20%"}>20%</option>
                                <option value={"30%"}>30%</option>
                                <option value={"40%"}>40%</option>
                                <option value={"50%"}>50%</option>
                            </NativeSelect>
                            <NativeSelect
                                onChange={(event) => { setSrokIpot(event.target.value) }} className="form_in react_select_style input_srok">
                                <option value={""}>На срок</option>
                                <option value={"5 лет"}>5 лет</option>
                                <option value={"10 лет"}>10 лет</option>
                                <option value={"15 лет"}>15 лет</option>
                                <option value={"20 лет"}>20 лет</option>
                                <option value={"25 лет"}>25 лет</option>
                                <option value={"30 лет"}>30 лет</option>
                            </NativeSelect>
                            <div className="form_in react_input_style input_name">
                                <TextField name="name" label="Ваш имя" />
                            </div>
                            <div className="form_in react_input_style input_phone">
                                <PhoneInput />
                            </div>
                            <input type="hidden" class="dop-info" data="Первоначальный взнос: " value={pervIpot} />
                            <input type="hidden" class="dop-info" data="Срок: " value={srokIpot} />
                            <input type="hidden" className="text" value='Получить расчет' />
                            <button className="pu_btn" celtype="getIpot" onClick={sendForm.sendForm}>Получить расчет</button>
                        </form>
                    </div>

                    <div className="popup_main pu_flat" style={{ display: "none" }}>
                        <a href="#" className="closeform" onClick={close}></a>
                        <div className="pu_tm">
                            <span><l>Двухкомнатная</l></span> квартира
                        </div>
                        <div className="area">
                            <span>Общая площадь:<b><i>73,63</i> м<sup>2</sup></b></span>
                            <span>Жилая площадь:<b><i>43,39</i> м<sup>2</sup></b></span>
                        </div>
                        <div className="flat_img"><img src="/images/flat_img.jpg" /></div>
                        <form className="pu_form">
                            <div className="form_tit">Узнайте стоимость квартиры <br /> на сегодня</div>
                            <div className="form_in react_input_style input_name">
                                <TextField name="name" label="Ваш имя" />
                            </div>
                            <div className="form_in react_input_style input_phone">
                                <PhoneInput />
                            </div>
                            <input type="hidden" className="text" value='Узнать стоимость квартиры' />
                            <button className="pu_btn" celtype="getFlat" onClick={sendForm.sendForm}>узнать стоимость</button>
                        </form>
                        <div className="clr"></div>
                    </div>

                    <div className="popup_main pu_liter" style={{ display: "none" }}>
                        <a href="#" className="closeform" onClick={close}></a>
                        <div className="pu_tm">
                            <span><l>Планировки</l></span> <b>Литера 1</b>
                            <sub id='plan_types'>Все квартиры с предчистовой отделкой WHITE BOX</sub>
                        </div>
                        <div className="liter_nav">
                            <div className="liter_nav_el entrance_list">
                                <span className="liter_text">Выберите подъезд</span>
                                <div className="entr_in act" onClick={entranceClick} data="1">Подъезд 1</div>
                                <div className="entr_in" onClick={entranceClick} data="2">Подъезд 2</div>
                            </div>
                            <div className="liter_nav_el floor_sel">
                                <span className="liter_text">Этаж</span>
                                <Slider1 className="slid_style_react"
                                    defaultValue={floor}
                                    //value={floor}
                                    step={1}
                                    min={2}
                                    max={17}
                                    onChange={handleChange}
                                    // aria-labelledby="range-slider2"
                                    valueLabelDisplay="on"
                                />
                            </div>
                        </div>

                        <div className="liter_img central_floor" data="central" style={{ display: "none" }}>
                            <img src="/images/floor_img/central_floor.jpg" />
                            <div className="lit_in fl_1" onClick={flatClick} id="21"></div>
                            <div className="lit_in fl_2" onClick={flatClick} id="22"></div>
                            <div className="lit_in fl_3" onClick={flatClick} id="23"></div>
                            <div className="lit_in fl_4" onClick={flatClick} id="24"></div>
                            <div className="lit_in fl_5" onClick={flatClick} id="25"></div>
                            <div className="lit_in fl_6" onClick={flatClick} id="26"></div>
                            <div className="lit_in fl_7" onClick={flatClick} id="27"></div>
                            <div className="lit_in fl_8" onClick={flatClick} id="28"></div>
                            <div className="lit_in fl_9" onClick={flatClick} id="29"></div>
                            <div className="lit_in fl_10" onClick={flatClick} id="30"></div>
                        </div>

                        <div className="liter_img forest_floor_1" data="milenium" entrance="1" style={{ display: "none" }}>
                            <img src="/images/floor_img/forest_floor_1.jpg" />
                            <div className="lit_in fl_1" onClick={flatClick} id="31"></div>
                            <div className="lit_in fl_2" onClick={flatClick} id="32"></div>
                            <div className="lit_in fl_3" onClick={flatClick} id="33"></div>
                            <div className="lit_in fl_4" onClick={flatClick} id="34"></div>
                            <div className="lit_in fl_5" onClick={flatClick} id="35"></div>
                            <div className="lit_in fl_6" onClick={flatClick} id="36"></div>
                            <div className="lit_in fl_7" onClick={flatClick} id="37"></div>
                            <div className="lit_in fl_8" onClick={flatClick} id="38"></div>
                            <div className="lit_in fl_9" onClick={flatClick} id="39"></div>
                            <div className="lit_in fl_10" onClick={flatClick} id="40"></div>
                            <div className="lit_in fl_11" onClick={flatClick} id="41"></div>
                        </div>

                        <div className="liter_img forest_floor_2" data="milenium" entrance="2" style={{ display: "none" }}>
                            <img src="/images/floor_img/forest_floor_2.jpg" />
                            <div className="lit_in fl_1" onClick={flatClick} id="42"></div>
                            <div className="lit_in fl_2" onClick={flatClick} id="43"></div>
                            <div className="lit_in fl_3" onClick={flatClick} id="44"></div>
                            <div className="lit_in fl_4" onClick={flatClick} id="45"></div>
                            <div className="lit_in fl_5" onClick={flatClick} id="46"></div>
                            <div className="lit_in fl_6" onClick={flatClick} id="47"></div>
                            <div className="lit_in fl_7" onClick={flatClick} id="48"></div>
                            <div className="lit_in fl_8" onClick={flatClick} id="49"></div>
                            <div className="lit_in fl_9" onClick={flatClick} id="50"></div>
                        </div>

                        <div className="liter_img milenium_floor_1" data="forest" entrance="1" style={{ display: "none" }}>
                            <img src="/images/floor_img/milenium_floor_1.jpg" />
                            <div className="lit_in fl_1" onClick={flatClick} id="1"></div>
                            <div className="lit_in fl_2" onClick={flatClick} id="2"></div>
                            <div className="lit_in fl_3" onClick={flatClick} id="3"></div>
                            <div className="lit_in fl_4" onClick={flatClick} id="4"></div>
                            <div className="lit_in fl_5" onClick={flatClick} id="5"></div>
                            <div className="lit_in fl_6" onClick={flatClick} id="6"></div>
                            <div className="lit_in fl_7" onClick={flatClick} id="7"></div>
                            <div className="lit_in fl_8" onClick={flatClick} id="8"></div>
                            <div className="lit_in fl_9" onClick={flatClick} id="9"></div>
                            <div className="lit_in fl_10" onClick={flatClick} id="10"></div>
                        </div>

                        <div className="liter_img milenium_floor_2" data="forest" entrance="2">
                            <img src="/images/floor_img/milenium_floor_2.jpg" />
                            <div className="lit_in fl_1" onClick={flatClick} id="11"></div>
                            <div className="lit_in fl_2" onClick={flatClick} id="12"></div>
                            <div className="lit_in fl_3" onClick={flatClick} id="13"></div>
                            <div className="lit_in fl_4" onClick={flatClick} id="14"></div>
                            <div className="lit_in fl_5" onClick={flatClick} id="15"></div>
                            <div className="lit_in fl_6" onClick={flatClick} id="16"></div>
                            <div className="lit_in fl_7" onClick={flatClick} id="17"></div>
                            <div className="lit_in fl_8" onClick={flatClick} id="18"></div>
                            <div className="lit_in fl_9" onClick={flatClick} id="19"></div>
                            <div className="lit_in fl_10" onClick={flatClick} id="20"></div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}