export default function Item({children, title, image, id}) {
    return (
        <article className="w-96 m-10 flex flex-col" id={id}>
            <h2 className="text-2xl p-2">{title}</h2>
            {image !== undefined && <img src={image} alt={title} className="pb-3 self-center" />}
            {children}
        </article>
    )
}