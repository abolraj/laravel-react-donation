export default function Sidebar({
    className, ...props
}) {

    return (
        <aside className={"text-[#FF2D20] text-lg text-center " + className}>
            {
                props.children ||
                <h3>
                    We can make better world
                    <br />
                    With help together ... ❤️
                </h3>
            }
        </aside>
    )
}