import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";



export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app);
    // google provider
    const googleProvider = new GoogleAuthProvider();

    // sign up function
    const signUp = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login function
    const login = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // function to get the current user
    useEffect(() => {
        setLoading(true);
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            setUser(currentUser)
            setLoading(false);
            // issue a jwt
            if (currentUser) {
                axios.post('https://share-a-bite-server.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            } else {
                axios.post('https://share-a-bite-server.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        })
        return unSubscribe;
    }, [auth])


    // log out function
    const logOut = () => {
        return signOut(auth);
    }

    // google login function
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // function for adding user image and name
    const updateUser = (name, imageUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: imageUrl
        })
    }

    const authInfo = { signUp, login, loading, user, logOut, googleLogin, updateUser };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;