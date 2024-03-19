import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgF-Ec1BkptroJO5TwCgquse5jkDtPwcg",
  authDomain: "broker-app-ecd4c-c7a25.firebaseapp.com",
  projectId: "broker-app-ecd4c",
  storageBucket: "broker-app-ecd4c.appspot.com",
  messagingSenderId: "416136845853",
  appId: "1:416136845853:web:0c4c63474479d330f1c4f4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

  //IOS: 416136845853-tcfvl2dtl5fg7q0891tm3hd5tue6pra5.apps.googleusercontent.com
  //Android: 416136845853-iq5rcu6ght2ldqmksc1kg1omlaqfdfve.apps.googleusercontent.com

  