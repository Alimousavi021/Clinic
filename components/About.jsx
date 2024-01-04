import React from 'react'
import AboutImg from '../assets/img/sec2.png'
import '../assets/master.css'

const About = () => {
    return (
        <section className='flex relative justify-start items-center'>
            <figure className='w-full h-full'>
                <img src={AboutImg} alt="" className='w-full h-[600px] md:h-[750px]' />
            </figure>

            <article className=' flex flex-wrap  w-[250px]  md:w-[560px] absolute mb-28 ms-[15px] md:ms-[90px]'>
                <h2 className='text-black flex justify-center items-center text-[14px] md:text-[28px] w-full font-filimo'>پیش از اینکه  پزشک باشم، دوست و همراه شما خواهم بود</h2>
                <p className='text-[#313030] text-center font-filimo flex justify-center items-center text-[13px] md:text-[24px]'>فارغ التحصیل دانشگاه تهران در رشته جراحی زنان، زایمان و نازایی هستم و در سالهای اخیر بیشتر در بیمارستانهای شهر تهران و قم فعالیت داشتم.  <br /> <br /> اعتقاد دارم رشته زنان و زایمان یکی از زیباترین رشته های پزشکی ست و با علم به این موضوع و علاقه وافر در این حیطه مشغول به فعالیت هستم.</p>


                <div className='button relative  ms-[40px] bg-inherit mt-10 cursor-pointer flex justify-center items-center'>
                    <h3 className='flex justify-center items-center text-[#313030] md:text-[24px] font-filimo'>درباره پزشک</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>
                </div>

            </article>


        </section>
    )
}

export default About