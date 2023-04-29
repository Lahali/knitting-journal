import firebase from "./firebase"
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth"

const registerNewUser = async (email, password) => {
  const auth = get()
  return createUserWithEmailAndPassword(auth, email, password).then(
    userCredential
  )
}
