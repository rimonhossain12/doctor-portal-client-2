import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.push('/');
            })
            .catch((error) => {
                setAuthError(error.message);

            }).finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    const singInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');

            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observed user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false));
    }


    return {
        user,
        isLoading,
        singInWithGoogle,
        registerUser,
        loginUser,
        authError,
        logOut
    }
}
export default useFirebase;