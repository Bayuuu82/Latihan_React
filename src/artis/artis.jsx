import { useParams } from "react-router-dom";

const Artis = () => {
  let params = useParams();
  return (
    <>
    nama artisnya {params.nama_artis}
    </>
  );
};

export default Artis;
