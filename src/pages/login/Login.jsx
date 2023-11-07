import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Helmet } from 'react-helmet-async';
import loginImg from '../../assets/login.jpg'
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../auth provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { login, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const user = { email, password, }

        login(email, password)
            .then(() => {
                Swal.fire(
                    'Success',
                    'You have successfully Logged in',
                    'success'
                )
            })
            .catch(error => {
                Swal.fire(
                    'Error!',
                    `${error.message}`,
                    'error'
                )
            })
    }

    const handleLoginWithGoogle = () => {
        googleLogin()
            .then(() => {
                Swal.fire(
                    'Success',
                    'You have successfully Logged in',
                    'success'
                )
            })
            .catch(error => {
                Swal.fire(
                    'Error!',
                    `${error.message}`,
                    'error'
                )
            })
    }


    return (
        <div className='wrapper'>
            <div className="spacer">
                <Helmet>
                    <title>Login | ShareABite - Waste Less, Feed</title>
                </Helmet>

                <h3 className='text-center font-semibold text-xl md:text-4xl mb-1 md:mb-9'>
                    {location.state?.message? location.state.message : 'Please, login'}
                </h3>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 items-center'>
                    <div>
                        <img src={loginImg} alt="" />
                    </div>
                    <div>
                        <form onSubmit={handleLogin} className="flex mx-auto max-w-md flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email1" value="Your email" />
                                </div>
                                <TextInput name='email' id="email1" type="email" placeholder="name@flowbite.com" required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password1" value="Your password" />
                                </div>
                                <TextInput name='password' id="password1" type="password" required />
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">Remember me</Label>
                            </div>
                            <input className='cursor-pointer text-white bg-[#9CC020] hover:bg-[#9dc020df] focus:ring-4 focus:ring-[#9dc020ca] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700' type="submit" value={'Login'} />
                            <div>
                                <p>Do not have an account?<Link to='/sign-up' className='font-medium text-[#9CC020]'> Sign up</Link > here.</p>

                                <div className='text-center mt-4'>
                                    <h3 className='mb-2 text-lg font-medium'>---- OR ----</h3>
                                    <Button onClick={handleLoginWithGoogle} className='w-full bg-[#25602B]'>Login with google</Button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;