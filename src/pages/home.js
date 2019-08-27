import React, { useState, useEffect } from "react";
import SuperTable from '../components/supertable/supertable'
import API from '../helpers/api'
// functional component
const Home = props => {

  const options = {
    idCol:'id', // Not Required- If the first col is an identity column
    editable: true,
    pageable: true, // Only Required- If you want paging
    pageSize:25,// Optional Defaults to 10
    hiddenCols: [],
    footer: true,
    customCols: [{ 'Desc': '<i aria-hidden="true" className=" circle  info  icon"></i> content=${styles}/>' }],
    styles: "ui red padded striped celled fixed table",
    // NB SelectedRow backgroundColor can be set from SuperTable styles default ALice-Blue
  }

  let [json, updateJson] = useState([])




  useEffect(() => {
    async function fetchAPI() {
      let url = 'https://jsonplaceholder.typicode.com/posts';
      let config = {};
      const response = await fetch(url);
      const json = await response.json()
      updateJson(json)
    }  
    fetchAPI();
  }, []);
  
  if (json.length > 0) {
    return (
      <div>
        <SuperTable json={json} options={options} />
      </div>
    )
  }
  return null
}

export default Home;

