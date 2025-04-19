import './App.css'
import Header from './Components/Header/Header'
import Item from './Components/Item/Item'


function App() {

  return (
    <>
      <Header />
      <section>
        <div className='mx-auto max-w-7xl p-8 grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-8'>
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
    </>
  )
}

export default App
