import {initializeApp} from "firebase/app";


const config = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "crm-linkedin-22d5c.firebaseapp.com",
    projectId: "crm-linkedin-22d5c",
    storageBucket: "crm-linkedin-22d5c.appspot.com",
    messagingSenderId: "737248628554",
}
const firebaseApp =initializeApp(config)

export default firebaseApp