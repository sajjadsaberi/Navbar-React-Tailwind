import {React} from 'react'
import './header.module.css'

function Headers() {
    return (
        <> 
    <nav className='bg-gray-900 flex items-center justify-between gap-96'>
        <span className='text-white py-5 px-8 font-Iran text-4xl'>سجاد صابری</span>
        <ul className='list-none p-0 m-0 flex'>
            <li className='mr-5 transition ease-in-out delay-150 hover:bg-gray-800  hover:transition hover:ease-in-out hover:delay-150'><a href="#" className='inline-block text-white text-center py-3.5 px-4 no-underline font-Iran hover:text-white'>صفحه اصلی</a></li>
            <li className='mr-5'><a href="#" className='inline-block text-white text-center py-3.5 px-4 no-underline font-Iran'>فروشگاه</a></li>
            <li className='mr-5'><a href="#" className='inline-block text-white text-center py-3.5 px-4 no-underline font-Iran'>درباره ما</a></li>
            <li className='mr-5'><a href="#" className='inline-block text-white text-center py-3.5 px-4 no-underline font-Iran'>ارتباط با ما</a></li>
        </ul>
    </nav>
        </>
    )
}

export default Headers;
