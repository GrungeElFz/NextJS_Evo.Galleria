function Header() {
  return (
    <header className="flex flex-rows justify-center items-center text-center">
      {/* Logo */}
      <div className="absolute top-4 left-5">
        <h1 className="text-red">Logo</h1>
      </div>

      {/* Models */}
      <div className="absolute flex flex-rows justify-center items-center m-auto top-4 left-0 right-0 gap-5">
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
      </div>

      {/* Menu */}
      <div className="absolute top-4 right-5">
        <h1 className="text-red">Menu</h1>
      </div>
    </header>
  );
}
export default Header;
