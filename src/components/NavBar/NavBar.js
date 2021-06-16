import './NavBar.css';

export const NavBar = () => {
  return (
    <header>
      <nav>
        <a className="nav-brand" href>Brand</a>
        <a className="nav-item" href>Главная</a>
        <a className="nav-item" disabled href>Виртуальные ставки</a>
      </nav>
    </header>
  );
}
