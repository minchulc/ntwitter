import  firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    /*
    REACT_APP_API_KEY = AIzaSyDlC2tMWm8655O9fE5riqSQIrjgjo5E51U
    REACT_APP_API_DOMAIN = nwitter-bda1f.firebaseapp.com
    REACT_APP_API_DATABASE_URL = https://nwitter-bda1f.firebaseio.com
    REACT_APP_API_PROJECT_ID = nwitter-bda1f
    REACT_APP_API_STORAGE_BUCKET = nwitter-bda1f.appspot.com
    REACT_APP_API_MESSAGIN_ID = 868949631421
    REACT_APP_API_APP_ID = 1:868949631421:web:c431ae2b87ae6a274a32d4
    */

    apiKey: "AIzaSyDlC2tMWm8655O9fE5riqSQIrjgjo5E51U",
    authDomain: "nwitter-bda1f.firebaseapp.com",
    databaseURL: "https://nwitter-bda1f.firebaseio.com",
    projectId: "nwitter-bda1f",
    storageBucket: "nwitter-bda1f.appspot.com",
    messagingSenderId: "868949631421",
    appId: "1:868949631421:web:c431ae2b87ae6a274a32d4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const dbService = firebase.firestore();

export const authService = firebase.auth();

export const storageService = firebase.storage(); // 사진 업로드 
