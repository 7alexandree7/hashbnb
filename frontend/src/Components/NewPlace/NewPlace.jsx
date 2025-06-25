import { useState } from 'react'
import Perks from '../Perks/Perks'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { CustomHookUserContext } from "../../hooks/CustomHookUserContext";

const NewPlace = () => {

  const {user} = CustomHookUserContext()
  const [title, setTitle] = useState("")
  const [city, setCity] = useState("")
  const [photos, setPhotos] = useState([])
  const [description, setDescription] = useState("")
  const [extras, setExtras] = useState("")
  const [price, setPrice] = useState("")
  const [checkin, setCheckin] = useState("")
  const [checkout, setCheckout] = useState("")
  const [guests, setGuests] = useState("")
  const [perks, setPerks] = useState([])
  const [redirect, setRedirect] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(title && city && photos.length > 0 && photos.length > 0 && description && extras && price && checkin && checkout && guests) {
      try {
        const newPlace = await axios.post('/places', {
          owner: user._id,
          title,
          city,
          photos,
          description,
          extras,
          perks,
          price,
          checkin,
          checkout,
          guests
        })
        setRedirect(true)
        console.log(newPlace);

      } catch (error) {
        console.log(JSON.stringify(error))
        alert("Erro ao criar o anúncio, tente novamente mais tarde.")
      }
    }
    else {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
  }


  if (redirect) return <Navigate to={'/account/places'} />

  return (

    <form onSubmit={handleSubmit} className='w-full px-8 flex flex-col gap-6'>

      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold ml-2'>Título</h2>
        <input
          type="text"
          id='title'
          required
          placeholder='Digite o título do seu anúncio'
          className=' border border-gray-300 px-4 py-2 rounded-full gap-4 outline-none'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>


      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold ml-2'>Endereço</h2>
        <input
          type="text"
          id='city'
          required
          placeholder='Digite a cidade e pais do seu anúncio'
          className=' border border-gray-300 px-4 py-2 rounded-full gap-4 outline-none'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>


      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold ml-2'>Fotos</h2>
        <div className='flex gap-2'>
          <input
            type="text"
            id='photos'
            required
            placeholder='Adicione uma foto pelo link dela'
            className=' border border-gray-300 px-4 py-2 rounded-full gap-4 grow outline-none'
            value={photos}
            onChange={(e) => setPhotos(e.target.value)}
          />
          <button
            className='rounded-full border border-gray-300 px-4 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer transition-all duration-200'>
            Enviar Foto
          </button>
        </div>

        <div className='grid grid-cols-5 gap-4 mt-4'>
          <label
            htmlFor="file"
            className='flex items-center justify-center gap-2 aspect-square cursor-pointer border border-gray-300 rounded-2xl'>
            <input type="file" id='file' className='hidden' />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
            Upload
          </label>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold ml-2'>Descrição</h2>
        <textarea
          id='description'
          required
          placeholder='Digite a descrição do seu anúncio'
          className=' border border-gray-300 px-4 py-2 rounded-2xl gap-4 outline-none h-40 resize-none'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold ml-2'>Comodidades</h2>
        <Perks  perks={perks} setPerks={setPerks}/>
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold ml-2'>Informações Extras</h2>
        <textarea
          id='extras'
          required
          placeholder='Digite informações extras do seu anúncio'
          className=' border border-gray-300 px-4 py-2 rounded-2xl gap-4 outline-none h-40 resize-none'
          value={extras}
          onChange={(e) => setExtras(e.target.value)}
        />
      </div>

      <div className='flex flex-col gap-6 pb-4'>
        <h2 className='text-2xl font-bold ml-2'>Restrições e Preços</h2>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-4'>

          <div className='flex flex-col gap-2'>
            <label className='ml-2 font-bold' htmlFor="price">Preço</label>
            <input
              type="number"
              id='price'
              required
              placeholder='R$ 500'
              className=' border border-gray-300 px-4 py-2 rounded-full gap-4 outline-none'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='ml-2 font-bold' htmlFor="checkin">Checkin</label>
            <input
              type="text"
              id='checkin'
              required
              placeholder='16:00'
              className=' border border-gray-300 px-4 py-2 rounded-full gap-4 outline-none'
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='ml-2 font-bold' htmlFor="checkout">Checkout</label>
            <input
              type="text"
              id='checkout'
              required
              placeholder='11:00'
              className=' border border-gray-300 px-4 py-2 rounded-full gap-4 outline-none'
              value={checkout}
              onChange={(e) => setCheckout(e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='ml-2 font-bold' htmlFor="guests">N convidados</label>
            <input
              type="number"
              id='guests'
              required
              placeholder='4'
              className=' border border-gray-300 px-4 py-2 rounded-full gap-4 outline-none'
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>

        </div>

        <button
          className='bg-primary-400 hover:bg-primary-500  cursor-pointer rounded-full px-4 py-2 text-white transition text-center mt-2'>
          Salvar Informações
        </button>

      </div>
    </form>
  )
}

export default NewPlace
