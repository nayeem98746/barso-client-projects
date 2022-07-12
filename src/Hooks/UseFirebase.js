import { getAuth, createUserWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,updateProfile ,signInWithEmailAndPassword,FacebookAuthProvider , signOut, GithubAuthProvider } from "firebase/auth";

import { useEffect, useState } from "react";
import initializeaFirebase from "../Compontents/Firebase/firebase.init";

initializeaFirebase()



const useFirebase = () => {

    const auth = getAuth()


    const [ user, setUser ] = useState({})
    const [ authError, setAuthError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(true)
    const [admin , setAdmin ] = useState(false)

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
             if(user){
                 setUser(user)
                 // setIsLoading(false)
             }else{  
                 setUser(null)
                
             }
             setIsLoading(false)
         });
         return () => unsubscribe;
     },[])


    // register function
   const registerUser = (email , password , name) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setAuthError('')
    const newUser = {email, displayName: name};
            console.log(newUser);
            setUser(newUser)
            saveUser(email, name , 'POST')
  })
  .catch((error) => {
    setAuthError(error.message)
    // ..
  })
  .finally(() => setIsLoading(false));

   }
   

// login function 
const loginUser = (email, password) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     setAuthError('')
    })
    .catch((error) => {
        setAuthError(error.message)
    }) 
    .finally(() => setIsLoading(false));
  
}


  // logOut function
    const logOut = (navigate) =>{
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser(null)
            navigate('/')
          }).catch((error) => {
            setAuthError( error.message )
          })
          .finally(() => setIsLoading(false));
    }
     // admin
     useEffect( () => {
      fetch(`https://desolate-hamlet-44285.herokuapp.com/users/${user.email} `)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
  }, [user?.email])


    // use server 
 
    const saveUser = (email, displayName, method) => {
      console.log("saveUser")
      const user = { email, displayName };
      fetch('https://desolate-hamlet-44285.herokuapp.com/users', {
          method: method,
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
          .then( res => res.json() )
          .then(res => console.log(res))
  }


    return{
        user,
        registerUser,
        admin,
        authError,
        isLoading,
        loginUser,
        logOut
    }


}
export default useFirebase;