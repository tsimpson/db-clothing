import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCdSd81uJA3-Vxgjr4nHDSaH2uIdPCwjfE",
  authDomain: "dead-bandit-db.firebaseapp.com",
  projectId: "dead-bandit-db",
  storageBucket: "dead-bandit-db.appspot.com",
  messagingSenderId: "685484046378",
  appId: "1:685484046378:web:f2afceae6dc55ff1036b53",
  measurementId: "G-CNTEHEG8G0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;