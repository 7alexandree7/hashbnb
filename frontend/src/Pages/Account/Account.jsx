import React from 'react'

const Account = () => {
  return (
    <section className='p-8'>
        <div className='max-w-7xl mx-auto flex flex-col gap-4 items-center'>
            <div className='flex gap-4'>
                <button>Perfil</button>
                <button>Reservas</button>
                <button>Lugares</button>
            </div>

            <div className='flex flex-col gap-2 items-center'>
                  <p>Logado como User (user@gmail.com)</p>
                <button>Logout</button>
            </div>
        </div>
    </section>
  )
}

export default Account
