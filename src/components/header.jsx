import {React} from 'react'
import './header.module.css'

function Headers() {
    return (
        <> 
    <nav className='bg-gray-900 flex items-center justify-between gap-96'>
        <span className='text-yellow-400 pt-0 pb-6 pl-3.5 font-Iran text-sm'><input type='text' placeholder='جست و جو ...' className='absolute w-44 h-6 outline-none rtl pr-2' required /></span>
        <ul className='list-none p-0 m-0 flex'>
            <li className='mr-5 transition ease-in-out delay-150 hover:bg-gray-800  hover:transition hover:ease-in-out hover:delay-150'><a href="#" className='inline-block text-white text-center py-3.5 px-4 no-underline font-Iran cursor-help hover:text-white'>ارتباط با ما</a></li>
            <li className='mr-5 transition ease-in-out delay-150 hover:bg-gray-800  hover:transition hover:ease-in-out hover:delay-150'><a href="#" className='inline-block text-white text-center py-3.5 px-4 no-underline font-Iran cursor-help hover:text-white'>درباره ما</a></li>
            <li className='mr-5 transition ease-in-out delay-150 hover:bg-gray-800  hover:transition hover:ease-in-out hover:delay-150'><a href="#" className='inline-block text-white text-center py-3.5 px-4 no-underline font-Iran cursor-help hover:text-white'>فروشگاه</a></li>
            <li className='mr-5 transition ease-in-out delay-150 hover:bg-gray-800  hover:transition hover:ease-in-out hover:delay-150'><a href="#" className='inline-block text-white text-center py-3.5 px-4 no-underline font-Iran cursor-help hover:text-white'>صفحه اصلی</a></li>
        </ul>
    </nav>
        </>
    )
}

export default Headers;
