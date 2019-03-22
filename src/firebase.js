import firebase from 'firebase'
require("firebase/firestore")

var config = {
    apiKey: "AIzaSyCoXHJYm5RY38gz8oWawmHC4-hvyYiJHRE",
    authDomain: "vue-shop-af366.firebaseapp.com",
    databaseURL: "https://vue-shop-af366.firebaseio.com",
    projectId: "vue-shop-af366",
    storageBucket: "vue-shop-af366.appspot.com",
    messagingSenderId: "623061418209"
};

const fb = firebase.initializeApp(config);
const db = firebase.firestore()

export { fb, db }