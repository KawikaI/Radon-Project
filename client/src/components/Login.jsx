import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div style={{ maxWidth: "300px", margin: "0 auto", paddingTop: "100px" }}>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" /><br />
        <input type="password" placeholder="Password" /><br />
        <button type="submit">Login</button>
      </form>
      <p style={{ marginTop: "1rem" }}>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}