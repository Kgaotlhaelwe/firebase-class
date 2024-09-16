import {collection, addDoc} from "firebase/firestore"
import { db } from "../config/firebase"

const addTodoItem =  ( async (item)=>{

    try {
        const todoRef = await addDoc(collection(db, "Users"), {
            todoItem: item
        })

        return todoRef;
        
    } catch (error) {
        
    }

})

export {addTodoItem}