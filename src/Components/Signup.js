import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Database } from 'firebase/database'; // Double-check this import


export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignup(event) {
        event.preventDefault();
        console.log(auth);
        console.log(Database);
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
    }

    return (
        <div>
            <h1>React Forms</h1>
            <form onSubmit={handleSignup}>
                <label>Enter Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Enter Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    );
}
