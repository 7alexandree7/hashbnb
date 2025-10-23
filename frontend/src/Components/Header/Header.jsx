import Logo from '../../assets/logo.webp'
import SearchIcon from '../../Icons/SearchIcon/SearchIcon'
import UserIcon from '../../Icons/UserIcon/UserIcon'
import MenuIcon from '../../Icons/MenuIcon/MenuIcon'

const Header = () => {
  return (
    <div className='shadow-md'>
      <div className='flex items-center justify-between px-8 py-2 max-w-7xl mx-auto'>

        <div className='flex items-center'>
          <img className='h-12' src={Logo} alt="" />
          <p className='text-2xl font-bold text-primary-400'>ashbnb</p>
        </div>

        <div className='flex items-center border border-gray-300 rounded-full shadow-md px-4 py-2'>
          <p className='pr-4 border-r border-gray-300'>Qualquer lugar</p>
          <p className='px-4 border-r border-gray-300'>Qualquer Semana</p>
          <p className='px-4'>Hóspedes</p>
          <div className='bg-primary-400 rounded-full text-white p-2'>
            <SearchIcon />
          </div>
        </div>

        <div className='flex items-center border border-gray-300 rounded-full shadow-md px-4 py-2'>
          <div className='flex items-center gap-1.5'>
            <MenuIcon />
            <UserIcon />
          </div>
          <p className='px-4'>uk unfast</p>
        </div>

      </div>
    </div >
  )
}

export default Header
