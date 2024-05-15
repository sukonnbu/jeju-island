export default function Item({children, title, image, id}) {
    return (
        <article className="m-10" id={id}>
            <h2 className="text-xl">{title}</h2>
            <img src={image} alt={title} />
            <p>{children}</p>
        </article>
    )
}