import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import "./App.css";

const base_url = process.env.REACT_APP_API_URL;

function App() {
  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({ sort: "rating", order: "desc" });
  const [filterGenre, setFilterGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const url = `${base_url}?page=${page}&sort=${sort.sort},${
          sort.order
        }&genre=${filterGenre.toString()}&search=${search}`;
        const { data } = await axios.get(url);
        setObj(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllMovies();
  }, [sort, filterGenre, page, search]);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="head">
          <img src="/images/logo.png" alt="logo" className="logo" />
          <Search setSearch={(search) => setSearch(search)} />
        </div>
        <div className="body">
          <div className="table_container">
            <Table movies={obj.movies ? obj.movies : []} />
            <Pagination
              page={page}
              limit={obj.limit ? obj.limit : 0}
              total={obj.total ? obj.total : 0}
              setPage={(page) => setPage(page)}
            />
          </div>
          <div className="filter_container"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
