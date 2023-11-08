import PropTypes from 'prop-types'
import { useContext } from 'react';
import { AuthContext } from '../auth provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PrivateParent = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    const stateInfo = { message: 'Please, login to visit the private page', path: location.pathname }

    if (loading) {
        return <div className='h-[60vh] flex justify-center items-center'>
            <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
    } else if (!user) {
        return <Navigate state={stateInfo} to='/login' ></Navigate>
    }
    return children;
    // console.log(location.pathname);
};

PrivateParent.propTypes = {
    children: PropTypes.node
}

export default PrivateParent;