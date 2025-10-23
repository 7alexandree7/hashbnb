import Item from "../../Components/Item/Item"

const Home = () => {
    return (
        <section>
            <div className="mx-auto max-w-7xl p-8 grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-8">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </section>
    )
}

export default Home
