import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD4Qc_aU_fYQf01uEmemG2NgIPmtocZxos',
  authDomain: 'netflix-clone-d715d.firebaseapp.com',
  projectId: 'netflix-clone-d715d',
  storageBucket: 'netflix-clone-d715d.appspot.com',
  messagingSenderId: '762542708475',
  appId: '1:762542708475:web:928cd56bda880835f0425e',
  measurementId: 'G-G6G2GC6E8Q',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = getStorage();
export default storage;
