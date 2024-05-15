export default function OtherPlace({name, type, description, address}) {
    return (
        <div className="w-96 justify-center">
            <details className="border-2 px-4 py-2">
                <summary className="text-xl">{name}</summary>
                <article className="">
                    <img className="w-94 h-94 pb-3" src={require("../images/"+name+".jpg")} alt={name} />
                    <section>
                        <p className="text-base">
                            {description}
                        </p>
                    </section>
                    <footer className="flex flex-col justify-between py-1">
                        <span className="px-2 text-sm">종류: {type}</span>
                        <span className="px-2 text-sm">주소: {address}</span>
                    </footer>
                </article>
            </details>
        </div>
    )
}