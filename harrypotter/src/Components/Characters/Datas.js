import { useState, useEffect} from 'react';
// import axios from "axios";
// export const Datas = [
//     {
//       name: "Harry Potter",
//       image: "https://ik.imagekit.io/hpapi/harry.jpg",
//     },
//     {
//       name: "Hermione Granger",
//       image: "https://ik.imagekit.io/hpapi/hermione.jpeg",
//     },
//     {
//       name: "Ron Weasley",
//       image: "https://ik.imagekit.io/hpapi/ron.jpg",
//     },
//     {
//       name: "Minerva McGonagall",
//       image: "https://ik.imagekit.io/hpapi/mcgonagall.jpg",
//     },
//     {
// ];

// https://hp-api.onrender.com/api/characters/house/gryffindor

export const Datas = () => {

  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredData,setFilteredData] = useState("")


  useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(
         "https://hp-api.onrender.com/api/characters/house/gryffindor"
        );
        const modifiedData = response.data.splice(0, 100)
        setData(modifiedData);
      };
  
      fetchData(search);
    }, []);
    useEffect(() => {
      if(data){
        const modifiedData = data.filter((el) => {
          return el.name.includes(search);
        });
        setFilteredData(modifiedData);
      } else {setFilteredData("")}
    }, [search]);
  return data
}
