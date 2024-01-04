import React from 'react'
import logo from '../assets/img/doctorlogo.png'
import customer from '../assets/img/Customer.png'
import phone from '../assets/img/Phone.png'
import search from '../assets/img/Search.png'

const Header = () => {
  return (
    <header className='w-full h-[100px] flex  bg-white'>
        <div className=' w-[80%] md:w-[45%] flex justify-start pl-[36px] items-center'>


            <div className='md:h-[30px] cursor-pointer md:w-[140px] flex justify-center items-center border-2 border-[#D591FE] ml-[12px] bg-[#D591FE]'>
                <h3 className='text-black text-[14px] md:text-[18px] mx-2 font-filimo'>دریافت نوبت</h3>
                <img src={phone} alt="" />
            </div>
            <div className='md:h-[30px] cursor-pointer md:w-[173px] flex justify-center items-center border-2 border-[#D591FE] ml-[12px]'>
                <h3 className='text-[#37384C] text-[14px] md:text-[18px] mx-2 font-filimo'>ورود / ثبت نام</h3>
                <img src={customer} alt="" />
            </div>
            <div className='md:h-[30px] cursor-pointer md:w-[173px] flex justify-center items-center border-2 border-[#D591FE] ml-[12px]'>
                <h3 className='text-[#37384C] text-[14px] md:text-[18px] mx-2 font-filimo'>اینجا جستجو کنید</h3>
                <img src={search} alt="" />
            </div>

        </div>


        <nav className=' hidden md:flex md:w-[45%]  items-center'>
            <ul className=' h-[24px] flex w-full'>
                <li className='flex flex-grow h-full  font-filimo text-[20px] text-[#37384C] cursor-pointer'>گالری</li>
                <li className='flex flex-grow h-full  font-filimo text-[20px] text-[#37384C] cursor-pointer'>تماس با ما</li>
                <li className='flex flex-grow h-full  font-filimo text-[20px] text-[#37384C] cursor-pointer'>درباره پزشک</li>
                <li className='flex flex-grow h-full  font-filimo text-[20px] text-[#37384C] cursor-pointer'>خدمات</li>
                <li className='flex flex-grow h-full  font-filimo text-[20px] text-[#37384C] cursor-pointer'>خانه</li>
            </ul>
        </nav>


        <figure className=' w-[20%] md:w-[10%] flex justify-end items-center pr-[27px]'>
            <img src={logo} alt="" />

        </figure>
    </header>
  )
}

export default Header