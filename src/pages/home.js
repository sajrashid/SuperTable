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
    customCols: [{ 'title': '<i aria-hidden="true" class=" circle  info  icon"></i> content=${title}/>' }],
    styles: "ui red padded striped celled fixed table",
    // NB SelectedRow backgroundColor can be set from SuperTable styles default ALice-Blue
  }
  const carOptions = { 
    // Not Required- If the first col is an identity column
    editable: true, //
    pageable: true, // Only Required- If you want paging
    pageSize:21,// Optional Defaults to 10
    hiddenCols: ['id'], //Hide any column
    customCols: [{ 'BitCoin Address': '<i aria-hidden="true" class=" circle  info  icon"></i> content=${BitCoin Address}/>' }],
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
      return <div className="lds-facebook"><div></div><div></div><div></div></div>
    }
    return (
      <div>
        <SuperTable json={json} options={options} />
      <SuperTable json={cars} options={carOptions} />
    </div>
    )
}

export default Home;

