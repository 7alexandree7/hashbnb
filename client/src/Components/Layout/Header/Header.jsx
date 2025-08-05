import { Link } from 'react-router-dom'
import imageLogoHeader from '../../../assets/logoHeader.webp'
import SvgSearch from '../../Svg/SvgSearch/SvgSearch'
import SvgUser from '../../Svg/SvgUser/SvgUser'
import SvgMenu from '../../Svg/SvgMenu/SvgMenu'

const Header = ({ user }) => {
    return (
        <header className='shadow-md'>
            <div className='max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-4'>

                <Link to='/' className='flex items-center'>
                    <img className='w-10' src={imageLogoHeader} alt="Logo da Hashtag" />
                    <p className='text-2xl font-bold text-primary-400'>ashbnb</p>
                </Link>

                <Link to='/' className='hidden lg:flex items-center border border-gray-300 px-6 py-2 shadow-md rounded-full'>
                    <p className='pr-4 border-r border-gray-300'>Qualquer lugar</p>
                    <p className='px-4 border-r border-gray-300'>Qualquer semana</p>
                    <p className='px-4'>Hóspedes</p>
                    <div className='bg-primary-400 rounded-full text-white p-2 font-semibold cursor-pointer'>
                        <SvgSearch />
                    </div>
                </Link>

                <Link to={user ? '/account' : '/login'} className='flex items-center gap-4 border border-gray-300 px-6 py-2 shadow-md rounded-full cursor-pointer'>
                    <div className='flex items-center gap-1'>
                        <SvgMenu />
                        <SvgUser />
                    </div>
                    {user ? (
                        <p className='font-semibold text-gray-700 max-w-20 md:max-w-24  lg:max-w-26  truncate'>{user.name}</p>
                    ) : (
                        <p className='font-semibold text-gray-700 max-w-20 md:max-w-24  lg:max-w-26  truncate'>Login</p>
                    )}
                </Link>

            </div>
        </header>
    )
}

export default Header
