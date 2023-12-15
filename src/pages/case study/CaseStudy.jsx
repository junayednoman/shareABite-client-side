import mernImg from '../../assets/mern.jfif'

const CaseStudy = () => {
    return (
        <div className='py-12'>
            <div className="wrapper">
                <div className="flex gap-8 lg:flex-row flex-col">
                    
                    <div className='lg:w-1/2 w-full'>
                        <img src={mernImg} alt="" />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <h4 className='font-medium text-2xl md:text-3xl'>A Peek into <span className='font-semibold'>ShareABite</span>: A MERN Saga</h4>
                        <p className='mt-5'><span className='font-semibold'>Website type: </span>Community Food Sharing and Surplus Reduction Platform</p>
                        <p className='py-3'><span className='font-semibold'>Purpose of the website:</span>  to connect those
                            with surplus food to those in need, reducing food waste and addressing
                            hunger</p>
                        <p className='pb-3'><span className='font-semibold'>Technologies I have used:</span> Tailwind css(Flowbite), React, Firebase, Node.js, Express js, and MongoDB
                        </p>
                        <p><span className='font-semibold'>Packages:</span> Swiper, sweetalert2, react-icons, react-helmet-async, moment.js, flowbite-react, Axios. In the back end: dotenv, cors, cookie-parser</p>
                    </div>
                </div>
                <div className='mt-8 md:mt-14'>
                    <h4 className='md:text-3xl text-2xl font-medium mb-4'>💥Key features:</h4>
                    <ul>
                        <li className='md:text-base text-sm py-[3px]'>1️⃣ Accessible from all devices and browsers.</li>
                        <li className='md:text-base text-sm py-[3px]'>2️⃣ Private pages(only logged in user can browse these pages)</li>
                        <li className='md:text-base text-sm py-[3px]'>3️⃣ Search and sort functionality implemented in the available food page</li>
                        <li className='md:text-base text-sm py-[3px]'>4️⃣ Sign up and sign in system with email and password. Google login integrated</li>
                        <li className='md:text-base text-sm py-[3px]'>5️⃣ Food item social share</li>
                        <li className='md:text-base text-sm py-[3px]'>7️⃣ Featured food items displayed on home page</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;