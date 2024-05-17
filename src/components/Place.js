export default function Place({name, content, address}) {
    return (
        <>
         <div className="w-96 justify-center" id={name}>
                <h2 className="text-xl p-2">{name}</h2>
                <article>
                    <section>
                        <p className="text-base font-sans">{content}</p>
                    </section>
                    <footer className="flex flex-col justify-between py-1">
                        <span className="px-2 text-sm">주소: {address}</span>
                    </footer>
                </article>
        </div>
        </>
    )
}