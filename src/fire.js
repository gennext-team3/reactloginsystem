import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyDVCkqd-P_raVA-JvYdZq9lbrhgxPlRcKA",
    authDomain: "reactjslogin-9bc1b.firebaseapp.com",
    projectId: "reactjslogin-9bc1b",
    storageBucket: "reactjslogin-9bc1b.appspot.com",
    messagingSenderId: "416113910010",
    appId: "1:416113910010:web:98b5374d0ea6e0966ea943"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;