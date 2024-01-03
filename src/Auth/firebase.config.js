import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCkku3mPC9MSlCREgn_bwjLYBKoka9tGWs",
    authDomain: "car-workshops.firebaseapp.com",
    projectId: "car-workshops",
    storageBucket: "car-workshops.appspot.com",
    messagingSenderId: "258018878065",
    appId: "1:258018878065:web:2afa188d268c87158d31d0"
};
const app = initializeApp(firebaseConfig);
export default app;