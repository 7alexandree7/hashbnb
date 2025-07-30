import Item from "../../Components/Layout/Item/Item"

const Home = () => {
    return (
        <section>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 mx-auto max-w-7xl p-8">
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
