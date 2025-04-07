import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div style={{ maxWidth: "300px", margin: "0 auto", paddingTop: "100px" }}>
      <h2>Sign Up</h2>
      <form>
        <input type="email" placeholder="Email" /><br />
        <input type="password" placeholder="Password" /><br />
        <button type="submit">Sign Up</button>
      </form>
      <p style={{ marginTop: "1rem" }}>
        Already have an account? <Link to="/">Log in</Link>
      </p>
    </div>
  );
}