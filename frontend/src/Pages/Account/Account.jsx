import { Link, useParams } from "react-router-dom"
import AccountProfile from "../../Components/AccountProfile/AccountProfile"

const Account = () => {

    const { subpage } = useParams()

    const buttonClass = (button) => {
        let finalClass = 'hover:bg-primary-400 hover:text-white px-4 py-2 rounded-full cursor-pointer transition'

        if (button === subpage) {
            finalClass += ' bg-primary-400 text-white'
        }
        return finalClass
    }

    return (
        <section className="p-12">
            <div className="max-w-7xl mx-auto flex  flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                    <Link to={'/account/profile'} className={buttonClass('profile')}>Profile</Link>
                    <Link to={'/account/bookings'} className={buttonClass('bookings')}>Reservas</Link>
                    <Link to={'/account/places'} className={buttonClass('places')}>Lugares</Link>
                </div>

                {subpage === 'profile' && <AccountProfile />}
                {subpage === 'bookings' && <div>Reservas</div>}
                {subpage === 'places' && <div>Lugares</div>}
            </div>
        </section>
    )
}

export default Account
