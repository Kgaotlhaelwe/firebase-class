import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import {auth} from "../config/firebase"

const signUp =  ((email, password)=>{

    return createUserWithEmailAndPassword(auth , email, password).then(()=>{

    }).catch((error)=>{

    })

})

const  SignIn =  ((email, password)=>{
    return signInWithEmailAndPassword(auth ,email,password).then(()=>{

    }).catch((error)=>{
        console.log((error.message))

    })
})



export {signUp, SignIn }