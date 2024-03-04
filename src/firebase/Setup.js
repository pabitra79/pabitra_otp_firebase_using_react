import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-gEmN8Bs78YV9ZZRWaxgjIgrDqBX3xbo",
  authDomain: "otp-project-with-react.firebaseapp.com",
  projectId: "otp-project-with-react",
  storageBucket: "otp-project-with-react.appspot.com",
  messagingSenderId: "865908462063",
  appId: "1:865908462063:web:1a3b559c3a26a3b137a61a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
