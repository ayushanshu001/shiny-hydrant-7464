
// import firebase fro

import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
  } from "firebase/auth";
  import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
  } from "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyC0Fk1tybEkfAT1VcNSGCInC-V6z7bvHa0",
    authDomain: "pradeep--auth.firebaseapp.com",
    projectId: "pradeep--auth",
    storageBucket: "pradeep--auth.appspot.com",
    messagingSenderId: "6637426742",
    appId: "1:6637426742:web:1e53bb596faa44cc1e2097"
  };


 const app = initializeApp(firebaseConfig);
 const auth=getAuth(app)
const db = getFirestore(app);



export const provider =new GoogleAuthProvider()
const signInWithGoogle=()=>{
    
    signInWithPopup(auth,provider).then((result)=>{
     
        const user = result.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs=getDocs(q)
        if (docs.docs.length === 0) {
             addDoc(collection(db, "users"), {
              uid: user.uid,
              name: user.displayName,
              authProvider: "google",
              email: user.email,
              photo:user.photoURL
            });
          }
       

    })
    .catch((error)=>{
        console.log(error)
        alert("Something went wrong");
    })
}



const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


  const logout = () => {
    signOut(auth);
  };


  export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };
  