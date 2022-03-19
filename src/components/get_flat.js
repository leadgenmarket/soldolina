import React, { useEffect, useState } from "react"
import Slider from '@material-ui/core/Slider';

export const GetFlat = () => {
    const [floors, setFloor] = useState([3, 15])
    const [area, setArea] = useState([20, 140])
    const [type, setType] = useState("all")
    const [flats, setFlats] = useState([])
    const [filteredFlats, setFilteredFlats] = useState([])
    const [flatsToShow, setFlatsToShow] = useState(3)
    const [hideMore, setHideMore] = useState(false)
    const handleChange = (event, newValue) => {
        setFloor(newValue);
        setFlatsToShow(3)
        filterFlats(flats, area, type, 3, newValue)
    };

    const handleChangeArea = (event, newValue) => {
        setArea(newValue)
        setFlatsToShow(3)
        filterFlats(flats, newValue, type, 3, floors)
    }


    const typeClick = (type) => {
        setType(type)
        setFlatsToShow(3)
        filterFlats(flats, area, type, 3, floors)
    }

    const moreClick = (e) => {
        e.preventDefault()
        setFlatsToShow(flatsToShow + 3)
        filterFlats(flats, area, type, flatsToShow + 3, floors)
    }

    const filterFlats = (flats, area, type, flatsToShow, floors) => {
        const newFlats = []
        let flatsCh = flats.filter((flat) => parseFloat(flat.info) >= area[0] && parseFloat(flat.info) <= area[1] && (type == "all" || type == flat.class) && flat.floor[0] >= floors[0] && flat.floor[1] <= floors[1])
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
        setFilteredFlats(newFlats)
    }

    const kvTitleFull = (classKv) => {
        switch (classKv) {
            case "0":
                return "Cтудия"
            case "1":
                return "Однокомнатная"
            case "2":
                return "Двухкомнатная"
            case "3":
                return "Трехкомнатная"
        }
    }

    const flatClick = (e) => {
        e.preventDefault()
        let id = parseInt(e.currentTarget.getAttribute('id'))
        let flat
        const headers = { 'Content-Type': 'application/json' }
        fetch(process.env.REACT_APP_BACKEND_URL + "/flats_react.php?id=" + id, headers)
            .then(res => res.json())
            .then((result) => {
                flat = result
                console.log(result)
                document.querySelector('.pu_rgba').style.display = "block"
                document.querySelectorAll('.pu_inner').forEach(el => {
                    el.style.display = "none"
                });
                document.querySelector('.pu_flat').style.display = "block"
                document.querySelector('body').classList.add('overflow')
                document.querySelector('.pu_flat_content__r img').setAttribute('src', process.env.REACT_APP_BACKEND_URL + "/" + flat.img)
                document.querySelector('.pu_flat #sq_all').innerHTML = flat.info + " м²"
                document.querySelector('.pu_flat #sq_zhil').innerHTML = flat.zhil + " м²"
                document.querySelector('.pu_flat .tm b').innerHTML = flat.class == "0" ? "Квартира-студия" : kvTitleFull(flat.class) + " квартира"
                document.querySelector('.pu_flat .text').value = 'Узнать стоимость ' + kvTitle(flat.class) + "; Общая площадь: " + flat.info + "; Жилая площадь: " + flat.zhil
            })
    }

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

    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_URL + "/flats_react.php", {})
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                setFlats(result)
                filterFlats(result, area, type, flatsToShow, floors)
            })
    }, [])
    return (
        <section class="flat">
            <div id="page2" class="tm tt">
                <b>Выберите квартиру</b> по <br />нужным параметрам
            </div>
            <div class="flat__nav">
                <div class="flat__nav_item">
                    <div class="flat__nav_name">Комнаты</div>
                    <div class="flat__nav_btn">
                        <div className={type == "all" ? "act" : ""} onClick={() => typeClick("all")}>Все</div>
                        <div className={type == "1" ? "act" : ""} onClick={() => typeClick("1")}>1</div>
                        <div className={type == "2" ? "act" : ""} onClick={() => typeClick("2")}>2</div>
                        <div className={type == "3" ? "act" : ""} onClick={() => typeClick("3")}>3</div>
                    </div>
                </div>
                <div class="flat__nav_item">
                    <div class="flat__nav_name">Этаж</div>
                    <div id="slid__etaj" class="slid"></div>
                    <Slider className="slid_style_react"
                        //defaultValue={floor}
                        value={floors}
                        step={1}
                        min={1}
                        max={18}
                        onChange={handleChange}
                        valueLabelDisplay="on"
                    />
                </div>
                <div class="flat__nav_item">
                    <div class="flat__nav_name">Площадь</div>
                    <div id="slid__area" class="slid"></div>
                    <Slider className="slid_style_react"
                        //defaultValue={floor}
                        value={area}
                        step={1}
                        min={1}
                        max={160}
                        onChange={handleChangeArea}
                        valueLabelDisplay="on"
                    />
                </div>
            </div>
            <ul class="benefit__list">
                {filteredFlats.map((flat) => <li>
                    <div class="benefit__item">
                        <a class="benefit__img" onClick={flatClick} id={flat["id"]} href="#"><img src={flat.img} /></a>
                        <div class="benefit__title">
                            {kvTitle(flat.class)} {flat.info} м²
                        </div>
                        <a class="benefit__btn" onClick={flatClick} id={flat["id"]} href="#">Узнать стоимость</a>
                    </div>
                </li>
                )}
            </ul>
            {!hideMore ? <div class="benefit__list_btn">
                <div onClick={moreClick} class="btn_white">Показать еще</div>
            </div> : ""}
        </section>
    )
}