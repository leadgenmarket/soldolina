import {useState} from 'react'

export const useFlats = () => {
    const[flats, setFlats] = useState([])
    const[activeFlat, setActiveFlat] = useState(null)
    return {flats, setFlats, activeFlat, setActiveFlat}
}