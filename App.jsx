import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Soalat from './components/Soalat'

const App = () => {
  const [st, setSt] = useState(0)
  const myRef = useRef()
  const sc1 = useRef(null)
  const sc2 = useRef(null)
  const sc3 = useRef(null)
  const sc4 = useRef(null)
  const n1 = useRef(null)
  const n2 = useRef(null)
  const n3 = useRef(null)
  const n4 = useRef(null)
  const n5 = useRef(null)
  const d1 = useRef(null)
  const d2 = useRef(null)
  const d3 = useRef(null)
  const d4 = useRef(null)
  const num = useRef(null)
  const slide = useRef(null)
  
  const myScroll = () => {
    let temp = myRef.current.scrollTop
    setSt(temp)
    
    
    if(st>(sc2.current.offsetTop + 1200)){
      d1.current.style.opacity='0'
      d2.current.style.opacity='1'
      d2.current.style.transform='translateY(-100%)'
      sc1.current.style.opacity='0'
      sc2.current.style.opacity='1'
      sc2.current.style.transform='translateY(-750px)'
      sc2.current.style.visibility='visible'
      num.current.innerHTML='02'
    }else{
      d1.current.style.opacity='1'
      sc1.current.style.opacity='1'
      sc2.current.style.transform='translateY(0)'
      d2.current.style.transform='translateY(0)'
      num.current.innerHTML='01'      
    }
    if(st>(sc2.current.offsetTop + 2000)){
      d2.current.style.opacity='0'
      d3.current.style.opacity='1'
      d3.current.style.transform='translateY(-200%)'
      sc2.current.style.opacity='0'
      sc3.current.style.opacity='1'
      sc3.current.style.transform='translateY(-1500px)'
      sc3.current.style.visibility='visible'
      num.current.innerHTML='03'
    }else{
      sc3.current.style.transform='translateY(0)'
      d3.current.style.transform='translateY(0)'
      
    }
    if(st>(sc2.current.offsetTop + 2800)){
      d3.current.style.opacity='0'
      d4.current.style.opacity='1'
      d4.current.style.transform='translateY(-300%)'
      sc3.current.style.opacity='0'
      sc4.current.style.opacity='1'
      sc4.current.style.transform='translateY(-2250px)'
      sc4.current.style.visibility='visible'
      num.current.innerHTML='04'
    }else{
      sc4.current.style.transform='translateY(0)'
      d4.current.style.transform='translateY(0)'
      
    }

    // if(st>(slide.current.offsetTop +5300)){
    //   slide.current.style.transform=`translateX(${(st/10)+'px'}) translateY(${'-'+(st/90)+'px'})`
    // }else{
    //   slide.current.style.transform=`translateX(-300px)`
    // }
    if(st>(slide.current.offsetTop +5100)){
     n1.current.style.transform=`translateX(500px) translateY(60px) rotate(-12deg)`
     n2.current.style.transform=`translateX(500px) translateY(0px) rotate(0deg)`
     n3.current.style.transform=`translateX(500px) translateY(40px) rotate(14deg)`
     n4.current.style.transform=`translateX(500px) translateY(200px) rotate(32deg)`
     n5.current.style.transform=`translateX(500px) translateY(500px) rotate(50deg)`
     
    }
    else{
      n1.current.style.transform=`translateX(-500px) translateY(300px) rotate(-30deg)`
      n2.current.style.transform=`translateX(-500px) translateY(120px) rotate(-18deg)`
      n3.current.style.transform=`translateX(-500px) translateY(15px) rotate(-10deg)`
      n4.current.style.transform=`translateX(-500px) translateY(0px) rotate(5deg)`
      n5.current.style.transform=`translateX(-500px) translateY(70px) rotate(15deg)`
    }
  }

  return (
    <main ref={myRef} onScroll={myScroll} class="bg-[#4a3618] w-full 2xl:container h-[100vh] mx-auto overflow-y-scroll overflow-x-hidden">
      <section className='w-full'>
        <Header />
        <Hero />
        <About />
        <Services sc1={sc1} sc2={sc2} sc3={sc3} sc4={sc4} num={num} d1={d1} d2={d2} d3={d3} d4={d4} />
        <Soalat slide={slide} n1={n1} n2={n2} n3={n3} n4={n4} n5={n5} />

{/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
      </section>
    </main>
    )
}

export default App