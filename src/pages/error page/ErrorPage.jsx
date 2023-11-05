import { Link } from 'react-router-dom';
import notFound from '../../assets/404.jpg'

const ErrorPage = () => {
    return (
        <div className='text-center pb-12'>
            <img className='w-[700px] mx-auto' src={notFound} alt="" />
            <h3 className='font-semibold md:text-4xl mb-6 text-2xl lg:text-5xl'>Oops! This page not found!</h3>
            <Link className='font-medium underline text-[#9CC020]' to={'/'}>Back to home</Link>
        </div>
    );
};

export default ErrorPage;