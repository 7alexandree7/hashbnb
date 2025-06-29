import { useParams, Link, Navigate } from "react-router-dom";
import AccountProfile from "../../Components/AccountProfile/AccountProfile";
import AccountPlaces from "../../Components/AccountPlaces/AccountPlaces";
import { CustomHookUserContext } from "../../hooks/CustomHookUserContext";

const Account = () => {

  let params = useParams();

  const {user} = CustomHookUserContext()

  if (!user) return <Navigate to='/login'/>

  return (
    <section className='p-8'>
      <div className='max-w-7xl mx-auto flex flex-col items-center'>
        <div className='flex gap-4 mb-4'>

          <Link
            to={`/account/profile`}
            className={`rounded-full hover:bg-primary-400  hover:text-white px-4 py-2 cursor-pointer transition ${params.subpage === 'profile' ? 'bg-primary-400 text-white' : ''}`}>
            Perfil
          </Link>

          <Link
            to={`/account/bookings`}
            className={`rounded-full hover:bg-primary-400  hover:text-white px-4 py-2 cursor-pointer transition ${params.subpage === 'bookings' ? 'bg-primary-400 text-white' : ''}`}>
            Reservas
          </Link>

          <Link
            to={`/account/places`}
            className={`rounded-full hover:bg-primary-400  hover:text-white px-4 py-2 cursor-pointer transition ${params.subpage === 'places' ? 'bg-primary-400 text-white' : ''}`}>
            Lugares
          </Link>

        </div>

        {params.subpage === "profile" && <AccountProfile   />}
        {params.subpage === "places" &&  <AccountPlaces />}

      </div>
    </section>
  )
}

export default Account
