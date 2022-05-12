import React, { useState } from "react"

export const GetThere = () => {
    const [type, setType] = useState(0)
    
    return (
        <div class="get_there">
            <div class="tm tt"><b>Как добраться</b></div>
            <div class="get_there__nav">
                <div onClick={()=>setType(0)} className={type==0?"act":""}>На общественном транспорте</div>
                <div onClick={()=>setType(1)} className={type==1?"act":""}>На автомобиле</div>
            </div>
            <div className="get_there__map">
                {type == 0 ? <div style={{ position: "relative", overflow: "hidden", width:"100%" }}><iframe  src="https://yandex.ru/map-widget/v1/-/CCUFbWFh1D" width="100%" height="480" frameborder="0" allowfullscreen="true" style={{ position: "relative" }}></iframe></div> : ""}
                {type == 1 ? <div style={{ position: "relative", overflow: "hidden", width:"100%" }}><iframe src="https://yandex.ru/map-widget/v1/-/CCUFbWSE1B" width="100%" height="480" frameborder="0" allowfullscreen="true" style={{ position: "relative" }}></iframe></div> : ""}
            </div>
        </div>
    )
}