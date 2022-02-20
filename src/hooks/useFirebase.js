import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

initializeFirebase();
const useFireBase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate, location) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');

                const newUser = { email, displayName: name };
                setUser(newUser);
                //save user to database
                saveUser(email, name, 'POST');

                //send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {

                }).catch((error) => {

                });

                // navigate('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    }


    //login
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    // googleSignIn
    const googleSignIn = (location, navigate) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('')
                const destination = location?.state?.from || '/';
                navigate(destination);
            }).catch((error) => {

                setAuthError(error.message);
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            })
            .finally(() => setIsLoading(false))

    }

    //logout
    const logout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    }
    // save user to database .server e data pathabo.
    const saveUser = (email, displayName, method) => {
        //user nam e ekti object banalam .
        const user = { email, displayName };
        fetch('https://limitless-reef-99253.herokuapp.com/addUser', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    // observer (user presence state)
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                //if we get the user
                setUser(user)
            } else {
                //if we dont get the user
                setUser({})
            }
            setIsLoading(false);
        });
        // if we mount or unmount,tokhon r etake dhore rakhbena
        return () => unSubscribe
    }, [])

    return {
        user,
        registerUser,
        loginUser,
        logout,
        isLoading,
        authError,
        googleSignIn,
    }
}
export default useFireBase;