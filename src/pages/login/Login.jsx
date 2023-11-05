import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Helmet } from 'react-helmet-async';
import login from '../../assets/login.jpg'

const Login = () => {
    return (
        <div className='wrapper'>
            <div className="spacer">
                <Helmet>
                    <title>Login | ShareABite - Waste Less, Feed</title>
                </Helmet>

                <div className='grid grid-cols-2 gap-10 items-center'>
                    <div>
                        <img src={login} alt="" />
                    </div>
                    <div>
                        <form className="flex max-w-md flex-col gap-4">
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
                            </div>
                            <Button className='bg-[#9CC020]'><input className='' type="submit" value={'Login'} /></Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;