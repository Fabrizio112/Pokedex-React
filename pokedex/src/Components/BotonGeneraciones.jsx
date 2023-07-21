import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


function BotonGeneraciones({ name, url, setGeneration }) {
    const route = `/${name}`
    const [urlGen, setUrlGen] = useState("")
    useEffect(() => {
        setUrlGen(url)
    }, [])
    const handleGeneration = () => {
        setGeneration(urlGen)
    }
    return (<Link to={route} className="button-gen" onClick={handleGeneration}> {name}</Link >);
}

export default BotonGeneraciones;