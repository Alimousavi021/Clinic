import React from 'react'
import s1 from '../assets/img/s1.png'
import s4 from '../assets/img/s4.png'
import heroImg from '../assets/img/hero1.png'
import kid from '../assets/img/kidd.png'

import pregnant from '../assets/img/pregnant.png'

const Services = ({ sc1, sc2, sc3, sc4, num, d1, d2, d3, d4 }) => {
    return (
        <>
            <section className='flex w-full flex-wrap bg-white sticky top-0 left-0'>


                <div className=' w-full md:w-[50%] flex justify-center items-center'>
                    <figure className='w-[85%] h-[85%]   flex justify-center items-center relative'>
                        <img src={pregnant} alt="" className='object-cover' />
                        <figcaption className=' flex content-between flex-wrap justify-center w-full h-[200px] absolute left-[0]'>


                            <div className='border w-full h-[140px] overflow-hidden'>
                                <div ref={d1} className='duration-1000'>
                                    <h2 className='text-[#37384C] text-[34px] font-filimo flex justify-center items-center w-full '>بارداری و زایمان</h2>
                                    <p className='text-center  text-[#37384C] text-[24px] font-filimo w-full'>مراقبت های قبل بارداری، حین بارداری و پس از زایمان <br /> زایمان طبیعی و سزارین، جلوگیری از بارداری</p>

                                </div>

                                <div className='duration-1000 opacity-0' ref={d2}>
                                    <h2 className='text-[#37384C] mt-2 text-[34px] font-filimo flex justify-center items-center w-full '>سلامت زنان</h2>
                                    <p className='text-center  text-[#37384C] text-[24px] font-filimo w-full'>بهداشت زنان اشاره به سلامت زنان دارد که به‌طور خاص <br />  از مردان قابل تمایز است. بهداشت زنان یک نمونه از بهداشت جامعه است</p>

                                </div>

                                <div className='duration-1000 opacity-0' ref={d3}>
                                    <h2 className='text-[#37384C] mt-2 text-[34px] font-filimo flex justify-center items-center w-full '>زیبایی زنان</h2>
                                    <p className='text-center  text-[#37384C] text-[24px] font-filimo w-full'>زیبایی چهره زنان همواره در طول تاریخ مورد تحسین و شیفتگی بوده است.  <br />در میان بسیاری از جنبه های زیبایی، جذابیت چهره زنان</p>

                                </div>

                                <div className='duration-1000 opacity-0' ref={d4}>
                                    <h2 className='text-[#37384C] mt-2 text-[34px] font-filimo flex justify-center items-center w-full '>جراح زنان</h2>
                                    <p className='text-center  text-[#37384C] text-[24px] font-filimo w-full'>مراقبت های قبل بارداری، حین بارداری و پس از زایمان <br /> زایمان طبیعی و سزارین، جلوگیری از بارداری</p>

                                </div>

                            </div>

                            <div className='button1 relative  ms-[40px] bg-inherit mt-10 cursor-pointer flex justify-center items-center'>
                                <h3 className='flex justify-center items-center text-[#313030] md:text-[24px] font-filimo'>دریافت نوبت</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                </svg>
                            </div>

                        </figcaption>
                    </figure>
                </div>
                <figure className=' w-full md:w-[50%] h-[600px] md:h-[750px]'>
                    <img ref={sc1} src={s1} alt="" className='w-full h-[600px] md:h-[750px] duration-[1s]' />
                    <img ref={sc2} src={s4} alt="" className='w-full md:h-[750px] duration-[1s] hidden lg:flex invisible opacity-0' />
                    <img ref={sc3} src={heroImg} alt="" className='w-full md:h-[750px] duration-[1s] hidden lg:flex invisible opacity-0' />
                    <img ref={sc4} src={kid} alt="" className='w-full md:h-[750px] duration-[1s] hidden lg:flex invisible opacity-0' />
                </figure>


                <div className='w-[190px] h-[190px] hidden md:flex flex-wrap absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#F7E9FE] rounded-xl content-between '>
                    <span ref={num} className='text-[#883AB7] text-[60px] ml-2 flex justify-center items-center h-[70px]   duration-1000'>01</span>
                    <span className='w-full flex items-center justify-end text-[#883AB7] pr-3 text-[30px]  '>/04</span>
                </div>
            </section>


            <section class="w-full h-[360vh] bg-inherit sticky top-0">
                <div class="w-full h-full bg-inherit"></div>
            </section>
        </>
    )
}

export default Services