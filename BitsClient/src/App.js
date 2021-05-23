import "./styles.css";
import axios from "axios";
import { get } from "./axios";
import React, { useState, useEffect } from "react";
import Table from "./table";
import config from "./headerConfig";
import Pagination from "./pagination";

export default function App() {
  const [songs, setReleases] = useState([]);

  const [pages, setPagination] = useState({
    page: 1,
    per_page: 30,
  });

  const [activePages, setActivePagination] = useState({
    active: 1,
  });

  const updatePage = () => {
    get(
      "artists/1/releases",
      `page=${activePages.active}&per_page=${pages.per_page}`
    ).then((response) => {
      const {
        data: { releases, pagination },
      } = response;
      setReleases(releases);
      setPagination(pagination);
    });
  };

  useEffect(() => {
    updatePage();
  }, [activePages]);

  useEffect(() => {
    axios.get("getArtist").then((response) => {
      console.log(response);
    });
  }, []);
  const handlePageChnage = (event, nextPage) => {
    event.preventDefault();
    setActivePagination({ ...activePages, active: nextPage });
  };

  return (
    <div className="App">
      <Table headerConfig={config} releasesData={songs}></Table>
      <Pagination
        paginationInfo={pages}
        handlePageChnage={handlePageChnage}
      ></Pagination>
    </div>
  );
}
