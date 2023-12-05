import { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

export const Datas = () => {
  const location = useLocation();
  let url = location.pathname.toLowerCase().replace('/', '');
  const [datas, setDatas] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredData,setFilteredData] = useState("")

  useEffect(() => {
    const fetchtheData = async () => {
        const response = await fetch(
            `https://hp-api.onrender.com/api/characters/house/${url}`
        );
        const responseApi = await response.json();
        setDatas(responseApi);
    };
    fetchtheData();
}, []);
console.log(datas);
  return datas
}
