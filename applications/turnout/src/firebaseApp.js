import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAGBLme-tRBnRuEPysjrv0JcTAekxwN7N0',
  authDomain: 'turnoutapp-9d845.firebaseapp.com',
  databaseURL: 'https://turnoutapp-9d845.firebaseio.com',
  projectId: 'turnoutapp-9d845',
  storageBucket: 'turnoutapp-9d845.appspot.com',
  messagingSenderId: '493199932612'
}

export const firebaseApp = firebase.initializeApp(config)
