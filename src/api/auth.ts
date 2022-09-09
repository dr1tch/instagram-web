import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";
import { auth } from "../lib/firebase";
// const auth = getAuth();
export async function register({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      // Signed in
      console.log("userCredential", userCredential);
      return userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return error;
      // ..
    });
}

export async function logout() {
  return await signOut(auth);
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential.user)
    .catch((error) => {
      console.log("error", error);
      return error;
    });
}
