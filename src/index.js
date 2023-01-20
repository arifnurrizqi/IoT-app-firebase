import { initializeApp } from 'firebase/app';
import { 
  getDatabase,
  onValue,
  ref
} from 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQYj2cAM0i91R9OR444nGd_icaHwNO_sg",
  authDomain: "iot-project-app-78c8a.firebaseapp.com",
  databaseURL: "https://iot-project-app-78c8a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iot-project-app-78c8a",
  storageBucket: "iot-project-app-78c8a.appspot.com",
  messagingSenderId: "975121613452",
  appId: "1:975121613452:web:e83baaf19fc6800b19f1a9",
  measurementId: "G-0QJFV0NSEF"
}

// init firebase app
initializeApp(firebaseConfig)

// init services
const db = getDatabase()


// collection ref
const colDevice = ref(db, 'devices');

// get collection data
onValue(colDevice, (showData) => {
  const data = showData.val();
  console.log(data);
}, (showError) => {
  console.log(showError);
});
