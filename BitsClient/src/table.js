import React from "react";

export default function Table({ releasesData, headerConfig, onSearch }) {
  return (
    <div className="Table">
      <input
        type="text"
        id="myInput"
        placeholder="Search for names.."
        title="Type in a name"
        onChange={onSearch}
      ></input>
      <table id="myTable">
        <tbody>
          <tr className="header">
            {headerConfig.map((header, headerIndex) => {
              return <th key={`header_${headerIndex}`}>{header.name}</th>;
            })}
          </tr>
          {releasesData.map((song, index) => {
            return (
              <tr key={`songs_${index}`}>
                {headerConfig.map((header, hindex) => {
                  if (header.type === "img") {
                    return (
                      <td key={`dataIndex_${hindex}`}>
                        {<img src={song[header.keyValue]}></img>}
                      </td>
                    );
                  }
                  return (
                    <td key={`dataIndex_${hindex}`}>{song[header.keyValue]}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
