import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYhCFxj53VmU2RY5Xa57q4vmcHmLPj6_w",
  authDomain: "next-todo-c6dff.firebaseapp.com",
  projectId: "next-todo-c6dff",
  storageBucket: "next-todo-c6dff.appspot.com",
  messagingSenderId: "448320344117",
  appId: "1:448320344117:web:8874303ce381494d94217c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
