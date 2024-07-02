import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="navbar">
        <button className="nav-button" onClick={() => setOpen(!open)}>
          <span className="nav-button__menu">Menu</span>
        </button>
        <ul className={`dropdown-menu ${open ? `active` : `inactive`}`}>
          <MenuItem link="#home" name="Home" />
          <MenuItem link="#ueber" name="Über dp-Tonstudio" />
          <MenuItem link="#mixing" name="Mixing" />
          <MenuItem link="#recording" name="Recording" />
          <MenuItem link="#preise" name="Preise" />
          <MenuItem link="#bewertungen" name="Bewertungen" />
          <MenuItem link="#gallerie" name="Gallerie" />
          <MenuItem link="#kontakt" name="Kontakt" />
        </ul>
      </nav>
    </header>
  );
}
function MenuItem(props) {
  return (
    <li className="list-item">
      <a href={props.link}>{props.name}</a>
    </li>
  );
}
