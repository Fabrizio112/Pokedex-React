function ContenedorTipos({ types }) {
    return (<div>
        {types && types.map((type, index) => <button className={type.type.name} id="btn-type" >{type.type.name}</button>)}
    </div>);
}

export default ContenedorTipos;