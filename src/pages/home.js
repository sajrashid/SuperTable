import React, { useState, useEffect } from "react";
import SuperTable from '../components/supertable/supertable'
import './home.css'


const Home = props => {
  // Table options not required for defaults
  const options = { 
    idCol:'id', // Not Required- If the first col is an identity column
    editable: true, //
    pageable: true, // Only Required- If you want paging
    pageSize:15,// Optional Defaults to 10
    hiddenCols: ['userId'], //Hide any column
    footer: true, //add table footer
    customCols: [{ 'Desc': '<i aria-hidden="true" className=" circle  info  icon"></i> content=${styles}/>' }],
    styles: "ui red padded striped celled fixed table",
    // NB SelectedRow backgroundColor can be set from SuperTable styles default ALice-Blue
  }
  let [json, updateJson] = useState([])
  let [isLoading, updateIsLoading] = useState(false)

  useEffect(() => {
    async function fetchAPI() {
      updateIsLoading(true)
      let url = 'https://jsonplaceholder.typicode.com/posts'
      const response = await fetch(url)
      const json = await response.json().then(updateIsLoading(false))
      updateJson(json)
    }  
    fetchAPI()
  }, [])
  
    if (isLoading) {
      return <div class="lds-facebook"><div></div><div></div><div></div></div>
    }
    return (
      <div>
        <SuperTable json={json} options={options} />
      </div>
    )
}

export default Home;

