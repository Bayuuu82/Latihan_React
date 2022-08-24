import { Link, Route, Routes } from "react-router-dom";
import Artis from "../artis/artis";
import Home from "./home";

function Navigation() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
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
          <Link to="/artis/bimo">Bimo</Link>
        </li>
        <li>
          <Link to="/artis/mamah_dedeh">Mama Dedeh</Link>
        </li>
        <li>
          <Link to="/artis/irfan_hakim">Irfan Hakim</Link>
        </li>
        <li>
          <Link to="/artis/hijir">Hijir</Link>
        </li>
        <li>
          <Link to="/artis/reka_alamsyah">Reka Alamsyah</Link>
        </li>
        <li>
          <Link to="/artis/heykal">Heykal</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artis/:nama_artis' element={<Artis />} />
      </Routes>
    </>
  );
};

export default Navigation;
