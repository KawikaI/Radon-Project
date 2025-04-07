// src/pages/Home.jsx
import Login from "../components/Login";
import Signup from "../components/Signup";

function Home() {
  return (
    <div>
      <h1>Welcome to the Radon Tracker</h1>
      <Login />
      <Signup />
    </div>
  );
}

export default Home;