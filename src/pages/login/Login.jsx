import { Checkbox, Label, TextInput } from 'flowbite-react';
import { Helmet } from 'react-helmet-async';
import login from '../../assets/login.jpg'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='wrapper'>
            <div className="spacer">
                <Helmet>
                    <title>Login | ShareABite - Waste Less, Feed</title>
                </Helmet>

                <h3 className='text-center font-semibold text-lg md:text-3xl mb-1 md:mb-4'>Please, login</h3>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                    <div>
                        <img src={login} alt="" />
                    </div>
                    <div>
                        <form className="flex mx-auto max-w-md flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email1" value="Your email" />
                                </div>
                                <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password1" value="Your password" />
                                </div>
                                <TextInput id="password1" type="password" required />
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">Remember me</Label>
                            </div><input className='cursor-pointer text-white bg-[#9CC020] hover:bg-[#9dc020df] focus:ring-4 focus:ring-[#9dc020ca] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700' type="submit" value={'Login'} />
                        </form>
                        <p className='mt-4'>Do not have an account?<Link to='/sign-up' className='font-medium text-[#9CC020]'> Sign up</Link > here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;