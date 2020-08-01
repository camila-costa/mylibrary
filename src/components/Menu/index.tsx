import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
// import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src="https://fontmeme.com/permalink/200729/88f9623e054840953ba60a497e4b22a5.png" alt="Logo da MyLibrary" />
      </Link>

      {/* <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo livro
      </Button> */}
    </nav>
  );
}

export default Menu;