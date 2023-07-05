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
          <ul>Item 1</ul>
          <ul>Item 2</ul>
          <ul>Item 3</ul>
        </li>
      </div>

      {/* Menu */}
      <div className="absolute top-4 right-5">
        <h1 className="text-red">Menu</h1>
      </div>
    </header>
  );
}
export default Header;
