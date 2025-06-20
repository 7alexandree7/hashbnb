import { Link, useParams } from 'react-router-dom'
import NewPlace from '../NewPlace/NewPlace';

const AccountPlaces = () => {

    let { action } = useParams();
    

    return (
        <div className='w-full max-w-7xl'>
            {action !== 'new' ? (
                <Link to="/account/places/new"
                    className="w-1/5 m-auto rounded-full bg-primary-400 hover:bg-primary-600  text-white px-4 py-2 cursor-pointer flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                    </svg>
                    <p>Adicionar novo lugar</p>

                </Link>
            ) : (
                <NewPlace />
            )}
        </div>
    )
}

export default AccountPlaces
