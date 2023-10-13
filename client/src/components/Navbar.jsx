import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='shadow-lg m-auto flex justify-between items-center max-w-6xl px-3 h-16'>
        <h1>E-States</h1>
        <form className='flex items-center p-2 bg-slate-100 rounded-xl'>
            <input type='text' placeholder='Search...' className='bg-transparent border-none focus:outline-none w-24 sm:w-64' />
            <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4'>
            <Link to='/'>
            <li className='cursor-pointer active:scale-95'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='cursor-pointer active:scale-95'>About</li>
            </Link>
            <Link to='/signin'>
            <li className='cursor-pointer active:scale-95'>SignIn</li>
            </Link>
        </ul>

    </header>
  )
}

export default Navbar