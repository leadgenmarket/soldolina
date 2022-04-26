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

    const checkFloorsInRange = (floors) => {
		let flag = false
		floors.forEach(fl=>{
			if (fl >= floor[0] && fl <= floor[1]) {
				flag = true
			}
		})
		return flag
	}

    const filterFlats = (flats, area, type, flatsToShow, floors) => {
        const newFlats = []
        let flatsCh = flats.filter((flat) => flat.total_area >= area[0] && flat.total_area <= area[1] && (type == "all" || type == flat.rooms) ) //&& checkFloorsInRange(flat.floors)
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
            case 0:
                return "Cтудия"
            case 1:
                return "Однокомнатная"
            case 2:
                return "Двухкомнатная"
            case 3:
                return "Трехкомнатная"
        }
    }

    const flatClick = (e) => {
        e.preventDefault()
        let id = e.currentTarget.getAttribute('id')
        let flat
        const headers = { 'Content-Type': 'application/json' }
        fetch(process.env.REACT_APP_BACKEND_URL + "/flats.php?ID=" + id, headers)
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
                document.querySelector('.pu_flat_content__r img').setAttribute('src', process.env.REACT_APP_PLANS_URL + flat.photo)
                document.querySelector('.pu_flat #sq_all').innerHTML = flat.total_area + " м²"
                document.querySelector('.pu_flat #sq_zhil').innerHTML = flat.living_area + " м²"
                document.querySelector('.pu_flat .tm b').innerHTML = flat.class == "0" ? "Квартира-студия" : kvTitleFull(flat.rooms) + " квартира"
                document.querySelector('.pu_flat .text').value = 'Узнать стоимость ' + kvTitle(flat.rooms) + "; Общая площадь: " + flat.total_area + "; Жилая площадь: " + flat.living_area
            })
    }

    const kvTitle = (classKv) => {
        switch (classKv) {
            case 0:
                return "Студии"
            case 1:
                return "1-k квартира"
            case 2:
                return "2-k квартира"
            case 3:
                return "3-k квартира"
        }
    }

    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_URL + "/flats.php", {})
            .then(res => res.json())
            .then((result) => {
                let flats = []
				result.map((flat) => {
					let floors = []
					if (flat.floors != "") {
						let tmpFloor = flat.floors.split(',')
						tmpFloor.forEach((fl)=>{
							floors.push(parseInt(fl))
						})
					}
					flat.floors = floors
					flats.push(flat)
				})
				setFlats(flats)
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
                    <div class="flat__nav_name">Количество комнат</div>
                    <div class="flat__nav_btn">
                        <div className={type == "all" ? "act" : ""} onClick={() => typeClick("all")}>Все</div>
                        <div className={type == "0" ? "act" : ""} onClick={() => typeClick("0")}>Студии</div>
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
                        min={2}
                        max={17}
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
                        min={18}
                        max={86}
                        onChange={handleChangeArea}
                        valueLabelDisplay="on"
                    />
                </div>
            </div>
            <ul class="benefit__list">
                {filteredFlats.map((flat) => <li>
                    <div class="benefit__item">
                        <a class="benefit__img" onClick={flatClick} id={flat.ID} href="#"><img src={process.env.REACT_APP_PLANS_URL+ flat.photo} /></a>
                        <div class="benefit__title">
                            {kvTitle(flat.rooms)} {flat.total_area} м²
                        </div>
                        <a class="benefit__btn" onClick={flatClick} id={flat.ID} href="#">Узнать стоимость</a>
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