import { useContext } from 'react';
import img2 from '../../../assets/leaves/service.webp'
import img1 from '../../../assets/leaves/service1.webp'
import leaves from '../../../assets/leaves/rosemoary-one.webp'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { AuthContext } from '../../../AuthProvider/AuthPrivider';


const BestSelling = () => {
    const {isDarkMode} = useContext(AuthContext)
    return (
        <div className=' w-[90%] m-auto lg:flex md:flex justify-between items-center'>
            <div className='lg:w-[65%] md:w-[50%] flex gap-6'>
                <img src={img1} className=' md:hidden lg:flex hidden w-[35%]  object-cover ' alt="" />
                <img src={img2} className=' lg:w-[62%] w-full object-cover h-full' alt="" />
            </div>
            <div className={`${isDarkMode ? 'border-orange-500 shadow-lg' : 'border-orange-500'}lg:w-[35%] md:w-[50%] border-t border-r border-b  shadow-lg relative`}>
                <div className=' w-full'>
                    {/* <SubHeader heading={``} subHeading={`The Service`}></SubHeader> */}
                    <div className='bg-white text-black text-center md:-left-20 md:w-full w-[90%] m-auto p-10 space-y-3 mt-16 flex flex-col justify-center items-center relative'>
                        <p className='text-orange-500 text-lg uppercase'>----The Service----</p>
                        <p className='text-4xl uppercase'>The BEST SERVICE</p>
                        <p className='text-lg font-extralight text-gray-500'>Whether it’s personalized menu recommendations, prompt attention to your needs, or creating a welcoming atmosphere, every detail is crafted with care to make you feel special. At Sovy, great food meets outstanding service, because your satisfaction is our top priority.</p>
                        <a href='#grandR'><button className=' bg-orange-500 py-3 px-5 text-lg text-white'>LEARN MORE</button></a>

                        <img className='absolute w-44 -right-6 -bottom-5 rotate-12' src={leaves} alt="" />

                    </div>
                </div>

                <div className='grid grid-cols-2 gap-4 ml-10 mt-6 pb-3'>
                    <div className='flex gap-2 items-center'>
                    <IoIosCheckmarkCircleOutline className='text-orange-500 text-lg' />
                    <p className='text-lg'>Fine Dinning</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                    <IoIosCheckmarkCircleOutline className='text-orange-500 text-lg' />
                    <p className='text-lg'>Fine Dinning</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                    <IoIosCheckmarkCircleOutline className='text-orange-500 text-lg' />
                    <p className='text-lg'>Fine Dinning</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                    <IoIosCheckmarkCircleOutline className='text-orange-500 text-lg' />
                    <p className='text-lg'>Fine Dinning</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BestSelling;