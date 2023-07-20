import { useEffect, useState } from "react";

function BotonGeneraciones({ name, url, setGeneration }) {
    const [urlGen, setUrlGen] = useState("")
    useEffect(() => {
        setUrlGen(url)
    }, [])
    return (<button className="button-gen" onClick={() => setGeneration(urlGen)}>{name}</button>);
}

export default BotonGeneraciones;