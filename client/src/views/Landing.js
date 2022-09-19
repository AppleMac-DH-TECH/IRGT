
import React from 'react';
import { Text } from '../components/languages/Text/Text';

const Landing = () => { 
  return (
    <>
          {/* Header section start */}
    <div className='relative'>
      <div className=" bg-[#0E2144] w-full shadow-lg  px-20   md:w-full md:navbar md:shadow-lg overflow-hidden">
        <div className=' md:w-3/4 md:m-auto '>  
          <div className='text-white container  md:flex md:align-items-center md:justify-between md:px-20 md:pt-20 '>
            <div className='text-xl  md:pt-0 p-5'>
              <div className='text-white text-5xl font-mono' style={{float : 'left'}}>
                <strong className='text-blue-500 break-all'>Wahed</strong>  <strong className='text-white'> + Khabib</strong>
                  <div><strong ><Text tid={'joinforce'}/></strong></div>
              </div>

              <div className='pt-10' style={{float : 'left'}}>
                  <p className='text-base'>
                    <Text tid={'top1'}/>
                  </p>
                  <p className='text-base'><Text tid={'top2'}/></p>
                  <p className='text-base'>
                  <Text tid={'top3'}/> <label className='text-blue-500 text-2xl'> Khabib Nurmagomedov </label><Text tid={'top4'}/>
                  </p>
                  <p className='text-base'><Text tid={'top5'}/></p>
              </div>
            </div>
            <div className='text-xl pt-5 '>
              <img src='./img/wahedMan.png' className='mx-auto pt-10 scale-125 md:pt-0  md:w-full md:h-full'/>
            </div>
          </div>
        </div>
      </div>
    {/* Description section end */}

    {/* Description section start */}
    <div className='mt-10 p-10 md:p-10'>
        <p className='text-center  font-mono text-[#0E2144] text-4xl  '>
          <Text tid={'middle1'}/>
        </p>
        <p className='text-center text-xl  font-mono mt-5 text-gray-400 pt-2'>
          <Text tid={'middle2'}/>
        </p>
        <p className='text-center text-xl  font-mono mt-2 text-gray-400 pt-2'>
         <Text tid={'middle3'}/>
        </p>
        <p className='text-center text-xl  font-mono mt-2 text-gray-400 pt-2'>
          <Text tid={'middle4'}/>
        </p>
        <p className='text-center text-xl  font-mono mt-2 text-gray-400 pt-2'>
          <Text tid={'middle5'}/>
        </p>
        <p className='text-center text-xl  font-mono mt-2 text-gray-400 pt-2'>
          <Text tid={'middle6'}/>
        </p>
      </div>
      {/* Description section end */}
      
      {/* Form section start */}
      <div className='mt-10 p-10 md:p-10'> 
        <p className='text-center  font-bold text-[#0E2144] text-4xl'>
            <Text tid={'bottom1'}/>
        </p>
        <div className='grid grid-cols-1 md:grid md:grid-cols-2 p-2 md:px-44 md:pt-10'>
          <div>
              <img src='./img/athlete.png' className='w-full h-full flex md:w-3/4 md:h-full'/>
          </div>
          <div>
            <div>
              <p className='text-center text-xl  font-mono  text-gray-400 '><Text tid={'bottom2'}/> </p>
              <p className='text-center text-xl  font-mono  text-gray-400 '><Text tid={'bottom3'}/></p>
              <p className='text-center text-xl  font-mono  text-gray-400 '><Text tid={'bottom4'}/></p>
              <p className='text-center text-xl  font-mono  text-gray-400 '><Text tid={'bottom5'}/></p>
            </div>
            {/* Form Element section start */}
            <form>
              <input type='text' placeholder='input1' className='p-3 border-[#0E2144] border w-80 flex mx-auto mt-5 rounded-tr-2xl rounded rounded-bl-2xl hover:border hover:border-[#0E2120] '/>
              <input type='text' placeholder='input2' className='p-3 border-[#0E2144] border w-80 flex mx-auto mt-5 rounded-tr-2xl rounded rounded-bl-2xl hover:border hover:border-[#0E2120] '/>
              <input type='text' placeholder='input3' className='p-3 border-[#0E2144] border w-80 flex mx-auto mt-5 rounded-tr-2xl rounded rounded-bl-2xl hover:border hover:border-[#0E2120] '/>
              <button className='p-3 border-[#0E2144]  w-80 justify-center  mx-auto mt-5 rounded-tr-2xl flex  bg-green-600 rounded rounded-bl-2xl hover:bg-green-700  rounded-br-2xl rounded-tl-2xl scale-105'>
                  <p><Text tid={'submit'}/></p>
              </button>
            </form>
            {/* Form Element section end  */}
          </div>
        </div>
      </div>
      {/* Form section end */}

      {/* let's connect section start */}
      <div className='grid grid-cols-1 p-10 pt-5 md:grid md:grid-cols-2 md:px-44 md:p-20  md:mx-auto'>
        <div className='p-5'>
          <p className='text-left font-bold text-[#0E2144] text-3xl '><Text tid={'last1'}/></p>
          <p className='text-left text-xl  font-mono  text-gray-400 pt-2'><Text tid={'last2'}/></p>
          <p className='text-left text-xl  font-mono  text-gray-400 pt-2'><Text tid={'last3'}/></p>
        </div>
        <div className='flex align-items-center justify-between px-10 md:px-40 md:pt-0 pt-5'>
          <div>
            <svg class="w-10 h-10 text-[#0E2144] fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
          </div> 
          <div>
            <svg class="w-10 h-10 text-[#0E2144] fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
          </div>
          <div>
            <svg class="w-10 h-10 text-[#0E2144] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" /></svg>
          </div>
        </div>
      </div>
      {/* let's connect section end */}

      {/* About us section start*/}
      <div className='mt-10 p-10 md:p-10'>
        <div className='grid grid-cols-1 md:grid md:grid-cols-2 p-2 md:px-44 md:pt-10'>
          <div>
              <img src='./img/smartPhone.png' className='w-full h-full ml-10 scale-105 flex md:w-3/4 md:h-full'/>
          </div>
          <div>
            <div className='pt-5'>
              <p className='text-left  font-bold text-[#0E2144] text-2xl '>
                <Text tid={'last4'}/>
              </p>
              <p className='text-left text-xl  font-mono  text-gray-400 mt-5'><Text tid={'last5'}/></p>
              <p className='text-left text-xl  font-mono  text-gray-400 '><Text tid={'last6'}/></p>
              <p className='text-left text-xl  font-mono  text-gray-400 mt-10'><Text tid={'last7'}/></p>
              <p className='text-left text-xl  font-mono  text-gray-400 '><a href='#' className='text-gray-600 '> wahedinvest.com </a><Text tid={'last8'}/></p>
            </div>
            {/* Form Element section start */}
            <form>
              <button className='p-4 border-[#0E2144]  w-80 justify-center  mx-auto mt-5 rounded-tr-2xl left  bg-green-600 rounded rounded-bl-2xl hover:bg-green-700  rounded-br-2xl rounded-tl-2xl scale-105'>
                <p><Text tid={'last9'}/></p>
              </button>
            </form>
            {/* Form Element section end  */}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing;