function Header() {
  return (
    <header className="flex flex-rows justify-center items-center text-center">
      {/* Logo */}
      <div className="absolute top-4 left-5">
        <h1 className="text-red">Logo</h1>
      </div>

      {/* Models */}
      <div className="absolute m-auto top-4 left-0 right-0">
        <li className="flex flex-rows justify-center items-center gap-5">
          <ul>Roadster</ul>
          <ul>Model S</ul>
          <ul>Model 3</ul>
        </li>
      </div>

      {/* Menu */}
      <div className="absolute top-4 right-5">
        {/* Hamburger SVG*/}
        <svg viewBox="0 0 100 80" width="20" height="20">
          <rect width="100" height="13"></rect>
          <rect y="30" width="100" height="13"></rect>
          <rect y="60" width="100" height="13"></rect>
        </svg>
      </div>
    </header>
  );
}
export default Header;
