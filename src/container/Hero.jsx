import { motion } from 'framer-motion';
import { FaApple } from 'react-icons/fa';

import heroBg from '../assets/heroBgPhone.webp';
import heroPhone from '../assets/heroPhone.webp';
import userOne from '../assets/userOne.webp';
import userThree from '../assets/userThree.webp';
import userTwo from '../assets/userTwo.webp';
import Navbar from '../components/Navbar';

const scaleBackground = {
  whileInView: {
    opacity: [0, 1],
    scale: [0.95, 1],
    transition: {
      delay: 0.2,
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const scaleVariants = {
  whileInView: {
    y: [60, 0],
    opacity: [0, 1],
    transition: {
      delay: 0.3,
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const scalePhone = {
  whileInView: {
    y: [300, 0],
    skewY: [6, 0],
    rotateX: [90, 0],
    opacity: [0, 0.5, 0.7, 1],
    transition: {
      delay: 0.4,
      duration: 1.6,
      ease: 'easeOut',
    },
  },
};

function Hero() {
  return (
    <div className='min-h-screen bg-white flex justify-center'>
      <div className='h-[100vh] bg-white w-[90%] mt-2 rounded-2xl border-[0.2px] border-slate-200 relative'>
        <motion.img
          variants={scaleBackground}
          whileInView={scaleBackground.whileInView}
          initial='hidden'
          animate='visible'
          src={heroBg}
          alt='backgroundImage'
          className='rounded-2xl absolute top-2 right-2 h-[98%] z-10 w-[34%]'
        />

        <Navbar />

        <div className='flex w-[90%] mx-auto h-[85%] mt-14'>
          {/* left side */}
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className='basis-[56%] flex flex-col gap-5 m-5'
          >
            <div className='border border-black/10 max-w-fit py-2 px-3 rounded-full'>
              Financial Management
            </div>
            <div className='flex flex-col gap-2'>
              <div className='text-[90px] font-semibold tracking-wide leading-[1.10]'>
                A simpler, <br /> smarter basic <br /> credit{' '}
                <span className='bg-gradient-to-r from-violet-400 to-cyan-300 bg bg-clip-text text-transparent'>
                  card.
                </span>
              </div>
              <p className='tracking-wide text-black/60 text-base font-medium'>
                Your powerful companion on the road to financial success!
                Explore <br /> personal budget management, investment
                opportunities.
              </p>
            </div>

            <div className=' mt-4 flex items-center gap-8'>
              <button className='flex items-center justify-center gap-1 bg-black text-white hover:bg-black/80 transition-all rounded-full p-3 px-4 font-medium'>
                <FaApple className='font-extrabold text-lg' />
                App Store
              </button>

              <div className='flex items-center'>
                <img
                  src={userOne}
                  alt='users'
                  className='w-[45px] h-[45px] border border-black/10 rounded-full'
                />
                <img
                  src={userTwo}
                  alt='users'
                  className='w-[45px] h-[45px] border border-black/10 rounded-full -ml-1'
                />
                <img
                  src={userThree}
                  alt='users'
                  className='w-[45px] h-[45px] border border-black/10 rounded-full -ml-1'
                />
                <div className='ml-4'>
                  <h6 className='font-medium'>24k+</h6>
                  <p className='text-[13px] font-semibold text-black/50'>
                    Active User
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* right side */}
          <div className='basis-[44%] h-[96%] mt-auto'>
            <div className='h-full relative w-[75%]'>
              <motion.img
                variants={scalePhone}
                whileInView={scalePhone.whileInView}
                src={heroPhone}
                alt='Your Image'
                className='h-[98%] absolute  z-20 w-full'
              />
              <div className='absolute bottom-0 right-2 bg-gradient-to-b from-transparent to-white z-50 h-1/4 w-full'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
