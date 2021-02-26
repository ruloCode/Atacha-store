import firebase from "firebase/app"
import "firebase/auth"
import "firebase/app"
import "firebase/firestore"
import "firebase/storage"

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const app = firebase.app()
const auth = firebase.auth()
const db = firebase.firestore()
// const now = firebase.firestore.Timestamp.now()
// const storage = firebase.storage()
const fbAuth = new firebase.auth.FacebookAuthProvider()
const googleAuth = new firebase.auth.GoogleAuthProvider()
export { auth, db, fbAuth, googleAuth }
console.log(app.name ? "Firebase Mode Activated!" : "Firebase not working :(")
