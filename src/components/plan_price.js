import { React, useEffect, useState } from "react"
import Slider from '@material-ui/core/Slider';
import Slider1 from '@material-ui/core/Slider';

export const Plan_price = () => {
    const url = "https://sunny-park.ru/"
    const [floor, setFloor] = useState([4, 15]);
    const [area, setArea] = useState([27, 84]);
    const [flats, setFlats] = useState([])
    const [filteredFlats, setFilteredFlats] = useState([])
    const [rooms, setRooms] = useState("all")
    const [flatsToShow, setFlatsToShow] = useState(4)
    const [hideMore, setHideMore] = useState(false)
    const [otdelka, setOtdelka] = useState(null)

    const showPopup = (e) => {
        e.preventDefault()

    }


    const handleChange = (event, newValue) => {
        setFloor(newValue);
    };
    const handleChange1 = (event, newValue) => {
        setArea(newValue);
        setFlatsToShow(4)
        filterFlats(flats, newValue, rooms, 4, otdelka)
    };

    const kvTitle = (classKv) => {
        switch (classKv) {
            case "0":
                return "Квартира-студия"
            case "1":
                return "1-k Квартира"
            case "2":
                return "2-k Квартира"
            case "3":
                return "3-k Квартира"
        }
    }

    const moreClick = (e) => {
        e.preventDefault()
        setFlatsToShow(flatsToShow + 4)
        filterFlats(flats, area, rooms, flatsToShow + 4, otdelka)
    }

    const filterFlats = (flats, area, rooms, flatsToShow, otdelka) => {
        const newFlats = []
        let flatsCh = flats.filter((flat) => parseFloat(flat.info) >= area[0] && parseFloat(flat.info) <= area[1] && (rooms == "all" || rooms == flat.class) && (otdelka === null || otdelka === flat.otdelka))
        if (flatsCh.length <= flatsToShow) {
            setHideMore(true)
        } else {
            setHideMore(false)
        }
        Object.keys(flatsCh).map((key) => {
            if (key < flatsToShow) {
                newFlats.push(flatsCh[key])
            }
        })
        console.log(flatsToShow)
        setFilteredFlats(newFlats)
    }

    const roomsClick = (event) => {
        setRooms(event.target.getAttribute('data'))
        setFlatsToShow(4)
        filterFlats(flats, area, event.target.getAttribute('data'), 4, otdelka)
    }

    const flatClick = (e) => {
        e.preventDefault()
        let id = parseInt(e.currentTarget.getAttribute('id'))
        let flat
        const headers = { 'Content-Type': 'application/json' }
        fetch(url + "/flats_react.php?id=" + id, headers)
            .then(res => res.json())
            .then((result) => {
                flat = result
                console.log(result)
                document.querySelectorAll('.popup_main').forEach(el => {
                    el.style.display = "none"
                });
                document.querySelector('.popup_rgba').style.display = "block"
                document.querySelector('.pu_liter').style.display = "none"
                document.querySelector('.pu_flat').style.display = "block"
                document.querySelector('.pu_flat .flat_img img').setAttribute('src', url + '/' + result.img)
                document.querySelector('.pu_flat .pu_tm l').innerHTML = kvTitle(result.class)
                document.querySelector('.area span i').innerHTML = flat.info
                document.querySelectorAll('.area span i')[1].innerHTML = flat.zhil
                document.querySelector('.pu_flat input.text').value = `Узнать стоимость квратиры Литер - ${document.querySelector('.pu_liter').getAttribute('liter')} Этаж - ${floor[0]}:${floor[1]}  Жилая площадь - ${flat.info}`
                document.querySelector('body').classList.add('overflow')
            })
    }



    useEffect(() => {
        fetch(url + "/flats_react.php", {})
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                setFlats(result)
                filterFlats(result, area, rooms, flatsToShow, otdelka)
            })
    }, [])
    return (
        <section className="plan_price">
            <div className="cw_main">
                <div className="tm">
                    <span><l>Выберите </l></span> квартиру
                    <sub>по нужным параметрам</sub>
                </div>
                <div className="plrp_nav">
                    <div className="plpr_nav_el room_list">
                        <span className="plpr_text">Комнаты:</span>
                        <div onClick={roomsClick} className={rooms == "all" ? "rl_in act" : "rl_in"} data="all">Все</div>
                        <div onClick={roomsClick} className={rooms == 1 ? "rl_in act" : "rl_in"} data="1"> 1</div>
                        <div onClick={roomsClick} className={rooms == 2 ? "rl_in act" : "rl_in"} data="2">2</div>
                        <div onClick={roomsClick} className={rooms == 3 ? "rl_in act" : "rl_in"} data="3">3</div>
                    </div>
                    <div className="plpr_nav_el floor_sel">
                        <span className="plpr_text">Этаж</span>
                        <p>с {floor[0]}</p>
                        <p>по {floor[1]}</p>
                        <Slider className="slid_style_react"
                            //defaultValue={floor}
                            value={floor}
                            step={1}
                            min={2}
                            max={17}
                            onChange={handleChange}
                            valueLabelDisplay="on"
                        />
                    </div>
                    <div className="plpr_nav_el floor_sel">
                        <span className="plpr_text">Площадь, м<sup>2</sup></span>
                        <p>от {area[0]}</p>
                        <p>до {area[1]}</p>
                        <Slider1 className="slid_style_react"
                            //defaultValue={floor}
                            value={area}
                            step={1}
                            min={25}
                            max={120}
                            onChange={handleChange1}
                            valueLabelDisplay="on"
                        />
                    </div>
                    <div className="plpr_nav_el rem_list">
                        <div onClick={(e) => { e.preventDefault(); setOtdelka(false); filterFlats(flats, area, rooms, flatsToShow, otdelka) }} className={otdelka === false ? "rl_in act" : "rl_in"}>без отделки</div>
                        <div onClick={(e) => { e.preventDefault(); setOtdelka(true); filterFlats(flats, area, rooms, flatsToShow, otdelka) }} className={otdelka === true ? "rl_in act" : "rl_in"}>White Box</div>
                    </div>
                </div>
                <div className="plan_list">
                    {filteredFlats.map((flat) => {
                        return <div key={flat["id"]} id={flat["id"]} className="pl_in" onClick={flatClick} data="pu_flat">
                            <div className="plpr_name"><span>{kvTitle(flat.class)} {flat.info}м<sup>2</sup></span></div>
                            <div className="plpr_img"><img src={url + "/" + flat.img} /></div>
                            <a href="#" onClick={flatClick} id={flat["id"]}>Узнать стоимость</a>
                        </div>
                    })}
                    {!hideMore ? <a onClick={moreClick} className="more_flat">Показать еще</a> : ""}
                </div>
            </div>
        </section >
    )
}