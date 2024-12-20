export default function Main({
    className, ...props
}) {

    return (
        <main className={"mt-6 " + className}>
            {props.children}
        </main>
    )
}