export default function Place({name, type, description, address}) {
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
                <article>
                    <img src={require("../images/"+name+".jpg")} alt={name} />
                    종류: {type}
                    <section>
                        <p>
                            {description}
                        </p>
                    </section>
                    <footer>
                        주소: {address}
                    </footer>
                </article>
            </details>
        </div>
    )
}