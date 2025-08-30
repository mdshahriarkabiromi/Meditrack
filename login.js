import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCSdgcGSNfHKSnFwgpPIDR72JVM0DSiDT0",
    authDomain: "meditrack-b0966.firebaseapp.com",
    projectId: "meditrack-b0966",
    storageBucket: "meditrack-b0966.firebasestorage.app",
    messagingSenderId: "108558671295",
    appId: "1:108558671295:web:2db3abb4ab759fffa9550a",
    measurementId: "G-D7CRTVFD70"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



// submit button
const submit = document.getElementById('loginBtn');
submit.addEventListener("click", function (event) {
    event.preventDefault();
    // inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Signing in ...")
            window.location.href = "index.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
});
