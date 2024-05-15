export default function Item({children, title, image, id}) {
    return (
        <article className="w-96 m-10" id={id}>
            <h2 className="text-2xl">{title}</h2>
            {image!=undefined && <img src={image} alt={title} />
            }
            <p>{children}</p>
        </article>
    )
}