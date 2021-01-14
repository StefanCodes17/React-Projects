import firebase from 'firebase/app'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBREn9N189Nbb7OkHzeDPjbZhs-qjA5SbQ",
    authDomain: "internshiporganizer-ca4dd.firebaseapp.com",
    projectId: "internshiporganizer-ca4dd",
    storageBucket: "internshiporganizer-ca4dd.appspot.com",
    messagingSenderId: "1090986237192",
    appId: "1:1090986237192:web:cb384c7f443f222d12e0bd",
    measurementId: "G-XF6ZD7ED6R"
};

const app = firebase.initializeApp(firebaseConfig)
export const auth = app.auth()
export default app;