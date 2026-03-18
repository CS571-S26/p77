import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#f5f5f5" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/issues">Issues</Link> |{" "}
      <Link to="/mood">Mood Checker</Link> |{" "}
      <Link to="/talk">Let's Talk</Link>
    </nav>
  );
}

export default Navbar;