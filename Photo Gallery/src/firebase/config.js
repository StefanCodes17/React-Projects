import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCM4jlaerUx0ULbvo8TVGhT2M2xz6m5LmY",
    authDomain: "firegram-65201.firebaseapp.com",
    databaseURL: "https://firegram-65201.firebaseio.com",
    projectId: "firegram-65201",
    storageBucket: "firegram-65201.appspot.com",
    messagingSenderId: "1039585139745",
    appId: "1:1039585139745:web:467ac59699506fd4609760"
};

//Initializes Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };