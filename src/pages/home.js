import React, { useState, useEffect } from "react";
import SuperTable from '../components/supertable/supertable'
import API from '../helpers/api'
// functional component
const Home = props => {

  const options = {
    editable: true,
    pageable: true,
    hiddenCols: [],
    footer: true,
    styles: "ui red padded striped celled fixed table",
    customCols: [{ 'Desc': '<i aria-hidden="true" className=" circle  info  icon"></i> content=${styles}/>' }]
  }

  let [json, updateJson] = useState([])


  function useFetch(url) {
    useEffect(async () => {
      const resp = await fetch(url)
      const json = await resp.json()
      updateJson(json)
    }, [])
  }
  const query = `https://jsonplaceholder.typicode.com/posts`
  useFetch(query, {})
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

