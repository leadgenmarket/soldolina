import React, { useEffect, useState } from "react"

export const BestOffers = () => {
    const [flats, setFlats] = useState([])
    const flatClick = (flat) => {


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
        document.querySelector('.pu_flat .text').value = 'Лучшее предложение! Узнать стоимость ' + kvTitle(flat.class) + "; Общая площадь: " + flat.info + "; Цена: " + flat.price
    }

    useEffect(() => {
        const headers = { 'Content-Type': 'application/json' }
        fetch(process.env.REACT_APP_BACKEND_URL + "/best_offers.php", headers)
            .then(res => res.json())
            .then((result) => {
                setFlats(result)
            })
    }, [])

    const kvTitle = (classKv) => {
        switch (classKv) {
            case "0":
                return "Cтудия"
            case "1":
                return "1-комнатная"
            case "2":
                return "2-комнатная"
            case "3":
                return "3-комнатная"
        }
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


    return (
        <section class="benefit plr">
            <div class="wmain">
                <div class="tm tt">Самые <b>выгодные</b> <br /><b>предложения</b> в городе</div>
                <ul class="benefit__list">
                    {flats.map((flat) => {
                        return (
                            <li>
                                <div class="benefit__item">
                                    <div class="benefit__title">
                                        {kvTitle(flat.class)} {flat.info} м²
                                    </div>
                                    <a class="benefit__img" onClick={(e) => { e.preventDefault(); flatClick(flat) }} href="#"><img src={process.env.REACT_APP_BACKEND_URL + "/" + flat.img} /></a>
                                    <div class="benefit__price">{flat.price} млн. ₽</div>
                                    {/* <a class="benefit__btn" href="#" onClick={(e) => { e.preventDefault(); flatClick(flat) }}>Узнать стоимость</a> */}
                                    <div class="benefit__ipoteka">
                                        <span>{flat.ipoteka1}</span>
                                        {/* <span>{flat.ipoteka2}</span> */}
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div class="benefit__list_info">
                    <span>* - при первом взносе 20% с ипотекой <b>4,99% для всех</b></span>
                    {/* <span>** - при первом взносе 20% с семейной ипотекой 15%</span> */}
                </div>
            </div>
        </section>
    )
}