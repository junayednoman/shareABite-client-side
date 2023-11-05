import { Helmet } from "react-helmet-async";
import loginImg from '../../assets/login.jpg'
import { Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../auth provider/AuthProvider";
import Swal from "sweetalert2";
const SignUp = () => {
    const { signUp } = useContext(AuthContext)


    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const imgUrl = form.imageUrl.value;
        const user = { name, email, password, imgUrl }

        signUp(email, password)
            .then(res => {
                console.log(res);
                Swal.fire(
                    'Success',
                    'You have successfully created an account',
                    'success'
                )
            })
            .catch(error => {
                console.log(error);
                Swal.fire(
                    'Error!',
                    `${error.message}`,
                    'error'
                )
            })
        console.log(user);
    }

    return (
        <div className='wrapper'>
            <div className="spacer">
                <Helmet>
                    <title>Sign Up | ShareABite - Waste Less, Feed</title>
                </Helmet>

                <h3 className='text-center font-semibold text-xl md:text-4xl mb-1 md:mb-12'>Please, sign up</h3>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 items-center'>
                    <div>
                        <img src={loginImg} alt="" />
                    </div>
                    <div>
                        <form onSubmit={handleSignUp} className="flex mx-auto max-w-md flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Your name" />
                                </div>
                                <TextInput id="name" name="name" type="name" placeholder="John Doe" required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Your email" />
                                </div>
                                <TextInput id="email" name="email" type="email" placeholder="john@gmail.com" required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password1" value="Your password" />
                                </div>
                                <TextInput name="password" id="password1" type="password" required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="image-url" value="Your image-url" />
                                </div>
                                <TextInput name="imageUrl" id="image-url" type="image-url" required />
                            </div>


                            <input className='cursor-pointer text-white bg-[#9CC020] hover:bg-[#9dc020df] focus:ring-4 focus:ring-[#9dc020ca] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700' type="submit" value={'Sign Up'} />
                        </form>
                        <p className='mt-4'>Already have an account? <Link to='/login' className='font-medium text-[#9CC020]'>Login</Link > here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;