import { Link, Route, Routes } from "react-router-dom";
import Artis from "../artis/artis";

function Navigation() {
  return (
    <>
      <ul>
        <li>
          <Link to="/artis/anya_geraldine">Anya Geraldine</Link>
        </li>
        <li>
          <Link to="/artis/tora_sudiro">Tora Sudiro</Link>
        </li>
        <li>
          <Link to="/artis/bonge">Bonge</Link>
        </li>
        <li>
          <Link to="/artis/kurma">Kurma</Link>
        </li>
        <li>
          <Link to="/artis/jeje">Jeje Slebew</Link>
        </li>
        <li>
          <Link to="/artis/dedy">Dedy Corbuzier</Link>
        </li>
        <li>
          <Link to="/artis/tretan_muslim">Tretan Muslim</Link>
        </li>
        <li>
          <Link to="/artis/coky">Coky</Link>
        </li>
        <li>
          <Link to="/artis/andien">Andien</Link>
        </li>
        <li>
          <Link to="/artis/"></Link>
        </li>
      </ul>
      <Routes>
        <Route path="/post/:nama_artis" element={<Artis />} />
      </Routes>
    </>
  );
};

export default Navigation;
