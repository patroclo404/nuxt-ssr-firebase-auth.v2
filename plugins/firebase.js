import firebase from 'firebase'
import '@firebase/firestore'

const config = {
  apiKey: process.env.FIREBASE.API_KEY,
  authDomain: `${process.env.FIREBASE.PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.FIREBASE.PROJECT_ID}.firebaseio.com`,
  projectId: process.env.FIREBASE.PROJECT_ID,
  storageBucket: `${process.env.FIREBASE.PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.FIREBASE.SENDER_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
const firestore = firebase.firestore()

if (process.browser) {
  const settings = {
    /* your settings... */
    timestampsInSnapshots: true
  }
  firestore.settings(settings)
}
const usersCollection = firestore.collection('users')

export { firebase, firestore, usersCollection }
