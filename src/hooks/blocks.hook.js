import {useState} from 'react'

export const useBlocks = () => {
    const[blocks, setBlocks_] = useState(3)
    const[popup, setPopup] = useState(false)
    const[menuClick, setMenuClick] = useState(false)
    const setBlocks = (count) =>{
        setBlocks_(count)
    }
    return {blocks, setBlocks, popup, setPopup, menuClick, setMenuClick}
}