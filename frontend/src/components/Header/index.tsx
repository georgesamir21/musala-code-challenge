import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="" alt="LOGO" />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/add-gateway">Add Gateway</Link>
      </div>
    </header>
  );
};
