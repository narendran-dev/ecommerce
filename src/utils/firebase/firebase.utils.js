import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDjWqzvKYEGaGw34HZh2ugDD2kLhCjXNg",
  authDomain: "ecommerce-b9718.firebaseapp.com",
  projectId: "ecommerce-b9718",
  storageBucket: "ecommerce-b9718.appspot.com",
  messagingSenderId: "815128210078",
  appId: "1:815128210078:web:dee98f7d3d48114c82a98f",
};

export const FirbaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const siginWithGooglePopup = () => signInWithPopup(auth, provider);
export const siginWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth;
    const createdAt = Date();
    try {
      await setDoc(userDocRef, {
        email,
        displayName,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};

export const createAuthUser = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const SigInAuthUser = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const SigOutAuthUser = async () => await signOut(auth);

export const onAuthUserStateChanged =  (callback) => onAuthStateChanged(auth, callback);
