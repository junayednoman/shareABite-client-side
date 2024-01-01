import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, } from 'react-icons/bs';
import logo from '../../assets/logo.png'


const MyFooter = () => {


    return (
        <div className='wrapper'>
            <Footer container>
                <div className="w-full">

                    <div className="text-left grid grid-cols-1 gap-2 sm:mt-4 md:grid-cols-3 lg:grid-cols-7 sm:gap-6">
                        <div className='col-span-1 lg:col-span-2'>
                            <img className='md:w-[160px] w-[120px]' src={logo} alt="" />
                            <p className='mt-3 text-gray-500 text-sm'>Connecting surplus to need, we are on a mission to reduce food waste and hunger, one plate at a time.</p>
                        </div>
                        <div className='ml-0 lg:ml-5 col-span-1 lg:col-span-2'>
                            <Footer.Title className='md:mt-0 mt-5 mb-3' title="Contact Info" />
                            <Footer.LinkGroup col>
                                <p><span className='font-medium'>Email: </span>ShareABite@gmail.com</p>
                                <p><span className='font-medium'>Phone: </span>(555) 555-1234</p>
                                <p>123 Main Street
                                    Anytown, USA
                                    12345</p>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='md:mt-0 mt-5 mb-3' title="about" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">About Us</Footer.Link>
                                <Footer.Link href="#">Our Mission</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='md:mt-0 mt-5 mb-3' title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Github</Footer.Link>
                                <Footer.Link href="#">Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='md:mt-0 mt-5 mb-3' title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                    {/* </div> */}
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <p className='text-sm text-gray-500'> Copyright © 2023 ShareABite. Made with love by <a href='https://junayed-noman.web.app/' rel='noreferrer' target='_blank' className='text-[#9CC020] font-medium'>Junayed Noman</a>.</p>
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsLinkedin} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default MyFooter;