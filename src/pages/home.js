import React, { useState, useEffect } from "react";
import SuperTable from '../components/supertable/supertable'
import './home.css'
import cars from '../data.json';

const Home = props => {
  // Table options not required for defaults
  const options = { 
    idCol:'id', // Not Required- If the first col is an identity column
    editable: true, //
    filters:true,
    searchInputCss:'searchInputCss',
    pageable: true, // Only Required- If you want paging
    pageSize:10,// Optional Defaults to 10
    labelCols:[{userId: '<i aria-hidden="true" class=" circle  user  icon"></i> <a>${userId}</a>'}],
    footer: true, //add table footer
    /*eslint no-template-curly-in-string: "off"*/
    customCols: [{ 'title': '<i aria-hidden="true" class=" circle  info  icon"></i> content=${title}/>' }],
    styles: "table",
    // NB SelectedRow backgroundColor can be set from SuperTable styles default ALice-Blue
  }
  
  const carOptions = { 
    // Not Required- If the first col is an identity column
    editable: true, //
    pageable: true, // Only Required- If you want paging
    pageSize:21,// Optional Defaults to 10
    hiddenCols: ['id'], //Hide any column
    dateCols:[{PurchaseDate:'en-GB'}], //specify locale info
    dateOptions : { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }, //optional
     //or specify locale  'en-GB'
    customCols: [{ 'BitCoin Address': '<i aria-hidden="true" class=" circle  info  icon"></i> content=${BitCoin Address}/>' }],
    styles: "table",
    // NB SelectedRow backgroundColor can be set from SuperTable styles default ALice-Blue
  }
  let [json, updateJson] = useState(null)



  const rowClick = (id,row) => {
   // id as string row as selectedRow object
  }

  useEffect(() => {
    async function fetchAPI() {
      const url = 'https://jsonplaceholder.typicode.com/posts'
      const response = await fetch(url)
      const json = await response.json()
      updateJson(json)
    }  
    fetchAPI()
  }, [])
  
    if (!json) {
      return <div className="lds-facebook"><div></div><div></div><div></div></div>
    }
    return (
      <div className="w-full h-full p-4">
      <SuperTable json={json} rowClick={rowClick} options={options} />
      <SuperTable json={cars} options={carOptions} /> 
    </div>
    )
}

export default Home;

