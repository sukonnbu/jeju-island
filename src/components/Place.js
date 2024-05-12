function Place({name, type, description, address}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            padding: '16px'
        }}>
            <details>
                <summary>{name}</summary>
                <img src={require("../images/"+name+".jpg")} alt={name} />
                종류: {type}
                <br /><br />
                설명: {description}
                <br /><br />
                주소: {address}
            </details>
        </div>
    )
}

export default Place;