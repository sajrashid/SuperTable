import React, { useState, useEffect } from "react";
import SuperTable from '../components/supertable/supertable'
import './home.css'
import cars from '../data.json';

const Home = props => {
  // Table options not required for defaults
  const options = { 
    idCol:'id', // Not Required- If the first col is an identity column
    editable: true, //
    pageable: true, // Only Required- If you want paging
    pageSize:7,// Optional Defaults to 10
    hiddenCols: ['userId'], //Hide any column
    footer: true, //add table footer
    /*eslint no-template-curly-in-string: "off"*/
    customCols: [{ 'Desc': '<i aria-hidden="true" className=" circle  info  icon"></i> content=${Desc}/>' }],
    styles: "ui red padded striped celled fixed table",
    // NB SelectedRow backgroundColor can be set from SuperTable styles default ALice-Blue
  }
  const carOptions = { 
    // Not Required- If the first col is an identity column
    editable: true, //
    pageable: true, // Only Required- If you want paging
    pageSize:20,// Optional Defaults to 10
    hiddenCols: ['id'], //Hide any column
    customCols: [{ 'Desc': '<i aria-hidden="true" className=" circle  info  icon"></i> content=${Desc}/>' }],
    styles: "ui red padded striped celled fixed table",
    // NB SelectedRow backgroundColor can be set from SuperTable styles default ALice-Blue
  }
  let [json, updateJson] = useState([])
  let [isLoading, updateIsLoading] = useState(false)

  useEffect(() => {
    async function fetchAPI() {
      updateIsLoading(true)
      const url = 'https://jsonplaceholder.typicode.com/posts'
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
      <SuperTable json={cars} options={options} />
    </div>
    )
}

export default Home;

