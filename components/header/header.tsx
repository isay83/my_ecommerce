import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="icon">MS</div>
        <div className="search">
          <input type="text" placeholder="Search product..." />
          <span></span>
        </div>
      </nav>
    </header>
  );
};
