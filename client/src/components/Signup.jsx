import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "0 auto", paddingTop: "100px" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button type="submit">Sign Up</button>
      </form>
      <p style={{ marginTop: "1rem" }}>
        Already have an account? <Link to="/">Log in</Link>
      </p>
    </div>
  );
}