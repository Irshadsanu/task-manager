import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"







const firebaseConfig = {
    apiKey: "AIzaSyAY3oZC5KzkV4brbl3J1Gz9FOJTjLn1IsI",
    authDomain: "task-manger-3606f.firebaseapp.com",
    projectId: "task-manger-3606f",
    storageBucket: "task-manger-3606f.appspot.com",
    messagingSenderId: "557464319948",
    appId: "1:557464319948:web:ef20fe7e88315e2f980f69",
    measurementId: "G-3DCW1K27B7"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}