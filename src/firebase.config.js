// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAjoJDR-84LsQZ84SrkBCGe7Kp22kkJ8Yo',
  authDomain: 'house-marketplace-app-b2c35.firebaseapp.com',
  projectId: 'house-marketplace-app-b2c35',
  storageBucket: 'house-marketplace-app-b2c35.appspot.com',
  messagingSenderId: '375959966714',
  appId: '1:375959966714:web:4722c27852c0f40430ca43',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
