import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.webp'
import SearchIcon from '../../Icons/SearchIcon/SearchIcon'
import UserIcon from '../../Icons/UserIcon/UserIcon'
import MenuIcon from '../../Icons/MenuIcon/MenuIcon'

const Header = ({ user}) => {
  return (
    <div className='shadow-md'>
      <div className='flex items-center justify-between px-4 py-4 sm:px-8 max-w-7xl mx-auto'>

        <Link to={'/'} className='flex items-center'>
          <img className='h-12' src={Logo} alt="" />
          <p className='text-2xl font-bold text-primary-400'>ashbnb</p>
        </Link>

        <Link to={'/'} className='hidden lg:flex items-center border border-gray-300 rounded-full shadow-md px-4 py-2'>
          <p className='pr-4 border-r border-gray-300'>Qualquer lugar</p>
          <p className='px-4 border-r border-gray-300'>Qualquer Semana</p>
          <p className='px-4'>Hóspedes</p>
          <div className='bg-primary-400 rounded-full text-white p-2'>
            <SearchIcon />
          </div>
        </Link>

        <Link to={user ? '/account' : '/login'} className='flex items-center border border-gray-300 rounded-full shadow-md px-4 py-2'>
          <div className='flex items-center gap-1.5'>
            <MenuIcon />
            <UserIcon />
          </div>
          {user && <p className='mx-2 max-w-32 truncate lg:max-w-20 '>{user.name} </p>}
        </Link>

      </div>
    </div >
  )
}

export default Header
