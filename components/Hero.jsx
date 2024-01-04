import React from 'react'
import heroImg from '../assets/img/hero1.png'
import video from '../assets/img/video.png'

const Hero = () => {
    return (
        <section className='flex relative'>
            <figure className='w-full h-full'>
                <img src={heroImg} alt="" className='w-full h-[600px] md:h-[750px]' />
            </figure>


            <div className='absolute top-0 left-0 w-full h-full bg-inherit flex items-center justify-center'>

                <article className=' w-[600px] flex flex-wrap mb-20'>
                    <h2 className='flex w-full text-center justify-center items-center font-filimo text-white text-[35px] md:text-[56px]'>, پیش از اینکه پزشک باشم<br />. دوست و همراه شما خواهم بود</h2>
                    <h2 className='flex w-full text-center justify-center items-center font-filimo text-white text-[23px] md:text-[34px]'>تکتم کیاماری <br />  جراح و متخصص زنان و زایمان</h2>

                </article>
                {/* Start of khotute movarab********* */}
                <svg className='absolute bottom-0 left-[5%]' xmlns="http://www.w3.org/2000/svg" width="619" height="484" viewBox="0 0 619 484" fill="none">
                    <path d="M618.5 488.5C549.667 316.833 170.8 26.1 -40 0.5" stroke="white" stroke-width="0.2" />
                </svg>
                <svg className='absolute bottom-0 left-[5%]' xmlns="http://www.w3.org/2000/svg" width="636" height="661" viewBox="0 0 636 661" fill="none">
                    <path d="M635.5 660.5C566.667 488.833 203.8 26.1 -7 0.5" stroke="white" stroke-width="0.2" />
                </svg>
                <svg className='absolute bottom-0 left-[15%]' xmlns="http://www.w3.org/2000/svg" width="500" height="754" viewBox="0 0 500 754" fill="none">
                    <path d="M499 754.5C430.167 582.833 211.8 26.1 1 0.5" stroke="white" stroke-width="0.2" />
                </svg>
                <svg className='absolute bottom-0 right-[17%]' xmlns="http://www.w3.org/2000/svg" width="500" height="754" viewBox="0 0 500 754" fill="none">
                    <path d="M1 755C69.8333 583.333 288.2 26.6 499 1" stroke="white" stroke-width="0.2" />
                </svg>
                <svg className='absolute bottom-0 right-[10%]' xmlns="http://www.w3.org/2000/svg" width="591" height="662" viewBox="0 0 591 662" fill="none">
                    <path d="M0.5 661C69.3333 489.333 432.2 26.6 643 1" stroke="white" stroke-width="0.2" />
                </svg>
                <svg className='absolute bottom-0 right-[10%]' xmlns="http://www.w3.org/2000/svg" width="574" height="484" viewBox="0 0 574 484" fill="none">
                    <path d="M0.5 489C69.3333 317.333 448.2 26.6 659 1" stroke="white" stroke-width="0.2" />
                </svg>
                {/* end*** */}

            </div>

            <figure className=' absolute bottom-[62px] right-[67px] w-[250px] h-[120px] md:h-[200px] md:w-[380px]'>
                <img src={video} alt="" />
            </figure>


            {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
        </section>
    )
}

export default Hero