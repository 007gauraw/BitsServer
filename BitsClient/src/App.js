import "./styles.css";
import axios from "axios";
import { get } from "./axios";
import React, { useState, useEffect } from "react";
import Table from "./table";
import { config, searchConfig } from "./headerConfig";
import Pagination from "./pagination";

export default function App() {
  const [songs, setReleases] = useState([]);
  const [tableConfig, setTableConfig] = useState(config);

  const [pages, setPagination] = useState({
    page: 1,
    per_page: 30,
  });

  const [activePages, setActivePagination] = useState({
    active: 1,
  });

  const [activeArtistID, setActiveArtistID] = useState(1);

  const updatePage = () => {
    axios
      .get(
        `getArtist/releses?id=${activeArtistID}&page=${activePages.active}&per_page=${pages.per_page}`
      )
      .then((response) => {
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

  const handlePageChnage = (event, nextPage) => {
    event.preventDefault();
    setActivePagination({ ...activePages, active: nextPage });
  };

  const onSearch = (event) => {
    // just quick way to avoid server request multiple time
    if (event.target.value.trim() === "" || event.target.value.length < 3) {
      return;
    }
    if (window.timeOut) {
      clearTimeout(window.timeOut);
    }
    window.timeOut = setTimeout(() => {
      axios.get(`getArtist?search=${event.target.value}`).then((response) => {
        console.log(response);
        const { data } = response;

        setActiveArtistID(data.id);
        setReleases(data.release.releases);
        setPagination(data.release.pagination);
      });
    }, 1000);
  };

  return (
    <div className="App">
      <Table
        headerConfig={tableConfig}
        releasesData={songs}
        onSearch={onSearch}
      ></Table>
      <Pagination
        paginationInfo={pages}
        handlePageChnage={handlePageChnage}
      ></Pagination>
    </div>
  );
}
