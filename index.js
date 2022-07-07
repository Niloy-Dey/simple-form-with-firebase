// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js"; // adding new line 1  it used when i are using relational database in firebase .
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";  // adding new line 3


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1EIV7bx1lBf1r0kqlRTdyC9YeYQslbZk",
    authDomain: "from-with-firebase-practice.firebaseapp.com",
    projectId: "from-with-firebase-practice",
    storageBucket: "from-with-firebase-practice.appspot.com",
    messagingSenderId: "7375102899",
    appId: "1:7375102899:web:3640690ca53deeb3b1e1c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);  // adding new line 2 it used when i are using relational database in firebase .
const auth = getAuth(app);  // adding new line  4

document.getElementById('signUp').addEventListener('click', (e) => {   // adding new line 5 
    e.preventDefault();
    // adding line 6 
    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("created user");// adding line 8  
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage); // adding line 7 
        });
        
})