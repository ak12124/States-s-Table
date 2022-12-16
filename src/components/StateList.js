import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";

const StateList = () => {
  const [data, setdata] = useState("");
  const [page, setPage] = useState(1);

  // console.log(data);
  useEffect(() => {
    fetch(
      `http://apicouture.nubiz.co.in/api/v1/Geolocation/GetStateListByPaging?pageNumber=${page}&amp;pageSize=10`
    )
      .then((response) => response.json())
      .then((result) => setdata(result.data.data))
      .catch((err) => console.log(err));
  }, [page]);
  return (
    <>
      <div className="container">
        <div className="tabledata">
          {data && (
            <table border={1} className="table">
              <thead>
                <tr>
                  <th>Name(State)</th>
                  <th>Country</th>
                  <th>isActive</th>
                </tr>
              </thead>
              <tbody>
                {data.map((items) => {
                  return (
                    <tr key={items.id} className="items">
                      <td>{items.name} </td>
                      <td>{items.countryName} </td>
                      <td>{items.isActive ? "True" : "False"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        <div className="pagination">
          <Pagination
            count={339}
            color="primary"
            variant="outlined"
            onChange={(event, value) => setPage(value)}
          />
        </div>
      </div>
    </>
  );
};

export default StateList;
