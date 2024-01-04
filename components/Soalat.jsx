import React from 'react'
import soalat from '../assets/img/soalat.jpg'

const Soalat = ({ slide,n1,n2,n3,n4,n5 }) => {
    return (
        <>
            <section className='flex flex-wrap sticky top-0 items-center justify-center'>
                <figure className='w-full h-full'>
                    <img src={soalat} alt="" className='w-full h-[600px] md:h-[750px]' />
                </figure>

                <div className='border-2 absolute w-[489px] h-[717px] rounded-[717px] border-[#cacab6] flex justify-center items-start'>
                    <h2 className='text-white text-[44px] font-filimo text-center mt-28'>سوالات متداول</h2>
                </div>

                <svg className='absolute bottom-[15%]' xmlns="http://www.w3.org/2000/svg" width="1280" height="153" viewBox="0 0 1280 153" fill="none">
                    <path d="M-127 152C-127 152 269.084 1 629.214 1C989.345 1 1407 152 1407 152" stroke="white" stroke-width="1.5" />
                </svg>

                <div ref={slide} className='w-[2000px]  absolute bottom-36 flex justify-evenly items-center duration-[3s] transition-all ease-linear translate-x-[0]'>
                    <div ref={n1} className='bg-[#FDFDFD] duration-[3s] flex flex-wrap justify-center content-evenly w-[170px] h-[200px] md:h-[365px] md:w-[280px] rounded-[12px] rotate-[-23deg] translate-y-[190px]'>

                        <div className='w-full  flex items-center justify-end pr-5'>
                            <span className='md:w-[35px] md:h-[35px] border border-black rounded-[50%] flex justify-center items-center text-[23px] text-[#302138]'>01</span>
                        </div>
                        <h2 className='w-full flex text-center justify-center items-center font-filimo md:text-[24px] text-black'>آیا می‌توانم وقت را آنلاین یا تلفنی تعیین کنم؟</h2>
                        <p className='w-[80%] flex text-center justify-center items-center text-[12px] md:text-[18px] text-[#504e4e] font-filimo'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی</p>

                    </div>
                    <div ref={n2} className='bg-[#FDFDFD] duration-[3s] flex flex-wrap justify-center content-evenly w-[170px] h-[200px] md:h-[365px] md:w-[280px] rounded-[12px] rotate-[-13deg] translate-y-[60px]'>

                        <div className='w-full  flex items-center justify-end pr-5'>
                            <span className='md:w-[35px] md:h-[35px] border border-black rounded-[50%] flex justify-center items-center text-[23px] text-[#302138]'>02</span>
                        </div>
                        <h2 className='w-full flex text-center justify-center items-center font-filimo md:text-[24px] text-black'>آیا وقت‌های ظهر یا شبانه‌روزی در دسترس است؟</h2>
                        <p className='w-[80%] flex text-center justify-center items-center text-[12px] md:text-[18px] text-[#504e4e] font-filimo'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی</p>

                    </div>
                    <div ref={n3} className='bg-[#FDFDFD] duration-[3s] flex flex-wrap justify-center content-evenly w-[170px] h-[200px] md:h-[365px] md:w-[280px] rounded-[12px] translate-y-[15px]'>
                        <div className='w-full  flex items-center justify-end pr-5'>
                            <span className='md:w-[35px] md:h-[35px] border border-black rounded-[50%] flex justify-center items-center text-[23px] text-[#302138]'>03</span>
                        </div>
                        <h2 className='w-full flex text-center justify-center items-center font-filimo md:text-[24px] text-black'>آیا می‌توانم وقت را آنلاین یا تلفنی تعیین کنم؟</h2>
                        <p className='w-[80%] flex text-center justify-center items-center text-[12px] md:text-[18px] text-[#504e4e] font-filimo'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی</p>
                    </div>
                    <div ref={n4} className='bg-[#FDFDFD] duration-[3s] flex flex-wrap justify-center content-evenly w-[170px] h-[200px] md:h-[365px] md:w-[280px] rounded-[12px] rotate-[13deg] translate-y-[60px]'>

                        <div className='w-full  flex items-center justify-end pr-5'>
                            <span className='md:w-[35px] md:h-[35px] border border-black rounded-[50%] flex justify-center items-center text-[23px] text-[#302138]'>04</span>
                        </div>
                        <h2 className='w-full flex text-center justify-center items-center font-filimo md:text-[24px] text-black'>آیا وقت‌های ظهر یا شبانه‌روزی در دسترس است؟</h2>
                        <p className='w-[80%] flex text-center justify-center items-center text-[12px] md:text-[18px] text-[#504e4e] font-filimo'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی</p>

                    </div>
                    <div ref={n5} className='bg-[#FDFDFD] duration-[3s] flex flex-wrap justify-center content-evenly w-[170px] h-[200px] md:h-[365px] md:w-[280px] rounded-[12px] rotate-[23deg] translate-y-[190px]'>

                        <div className='w-full  flex items-center justify-end pr-5'>
                            <span className='md:w-[35px] md:h-[35px] border border-black rounded-[50%] flex justify-center items-center text-[23px] text-[#302138]'>05</span>
                        </div>
                        <h2 className='w-full flex text-center justify-center items-center font-filimo md:text-[24px] text-black'>آیا می‌توانم وقت را آنلاین یا تلفنی تعیین کنم؟</h2>
                        <p className='w-[80%] flex text-center justify-center items-center text-[12px] md:text-[18px] text-[#504e4e] font-filimo'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی</p>

                    </div>
                </div>
            </section>


            <section class="w-full h-[150vh] bg-inherit sticky top-0">
                <div class="w-full h-full bg-inherit"></div>
            </section>
        </>
    )
}

export default Soalat