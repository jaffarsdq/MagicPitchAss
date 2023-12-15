import { FiArrowUpRight } from 'react-icons/fi';
import { RiArrowDropDownLine } from 'react-icons/ri';

import logo from '../assets/logo.svg';

function Navbar() {
  return (
    <div className='flex justify-between w-[95%] items-center mx-auto mt-10 relative z-20'>
      <div className=' hover:cursor-pointer'>
        <img src={logo} alt='logo' />
      </div>
      <div>
        <ul className='flex gap-6 items-center text-black/80'>
          <button className='flex hover:bg-slate-100 rounded-full p-1 px-3  transition-all duration-200'>
            Product
          </button>
          <div className='relative group'>
            <button className='flex bg-slate-50/50 hover:bg-slate-100 rounded-full p-1 px-3 group transition-all duration-200'>
              Compare
              <RiArrowDropDownLine className='text-2xl mt-[1px] group-hover:-rotate-180 duration-200 transition-all' />
            </button>
            <div className='h-[15rem] w-[40rem] bg-white absolute top-8 mt-1 rounded-xl border-[0.2px] border-black/10 hidden group-hover:block z-50  p-4 transition-all delay-75'>
              {/* Your modal content goes here */}
              <h2>Modal list</h2>
              <ul className='mt-3 text-sm font-normal flex flex-col gap-3 cursor-pointer w-fit'>
                <li>Home</li>
                <li>Product</li>
                <li>About</li>
                <li>Pricing</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <button className='flex hover:bg-slate-100 rounded-full p-1 px-3 transition-all duration-200'>
            Pricing
          </button>
          <button className='flex hover:bg-slate-100 rounded-full p-1 px-3 transition-all duration-200'>
            Contact
          </button>
        </ul>
      </div>
      <div className='flex gap-5'>
        <button className='border-[0.4px] border-black/80 bg-inherit hover:bg-black hover:text-white transition-all rounded-full w-16 h-10 flex justify-center items-center font-normal text-base'>
          Login
        </button>
        <button className='flex items-center justify-center gap-1 bg-black text-white hover:bg-black/80 transition-all rounded-full w-28 h-10 font-medium'>
          Let&apos;s Talk <FiArrowUpRight className='font-extrabold text-lg' />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
