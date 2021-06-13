import React, { useState, useEffect } from "react";
import SuperTable from '../components/supertable/supertable'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './home.css'
import cars from '../data.json';

const Home = props => {
  const data = [{ 'id': 0, 'Name': 'abc', 'IsReady': true }, { 'id': 1, 'Name': 'XYZ', 'IsReady': false }, { 'id': 3, 'Name': 'Cat', 'IsReady': true }]
  const codeString = "const data=[\n {'id':0,'Name':'abc','IsReady':true},\n {'id':1,'Name':'XYZ','IsReady':false},\n {'id':3,'Name':'Cat','IsReady':true}\n ]\n  <SuperTable json={data} /> "

  // Table options not required for defaults
  const options = {
    idCol: 'id', // Not Required- If the first col is an identity column
    editable: true, //
    hiddenCols: ['id'], //Hide any column
    filters: true,
    searchInputCss: 'searchInputCss',
    pageable: true, // Only Required- If you want paging
    pageSize: 10,// Optional Defaults to 10
    footer: true, //add table footer
    /*eslint no-template-curly-in-string: "off"*/
    styles: "table-fixed w-full",
    cellStyles: "border px-8 py-4 ",
    theadStyles: "bg-blue-100 border  px-8 py-4",

    // NB SelectedRow backgroundColor can be set from SuperTable styles default ALice-Blue
  }

  const carOptions = {
    // Not Required- If the first col is an identity column
    editable: true, //
    pageable: true, // Only Required- If you want paging
    pageSize: 21,// Optional Defaults to 10
    hiddenCols: ['id'], //Hide any column
    dateCols: [{ PurchaseDate: 'en-GB' }], //specify locale info
    dateOptions: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }, //optional
    //or specify locale  'en-GB'
    customCols: [{ 'BitCoin Address': '<i aria-hidden="true" class=" circle  info  icon"></i> content=${BitCoin Address}/>' }],
    styles: "table",
    // NB SelectedRow backgroundColor can be set from SuperTable styles default ALice-Blue
  }
  let [json, updateJson] = useState(null)

  const rowClick = (id, row) => {
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
    <div className="w-full h-full p-4 font-mono">
      <div className="w-full p-8 text-left bg-green-100">
        <h2 className="w-full p-4 mb-2 text-xl bg-green-200"> Simple example</h2>
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
        </SyntaxHighlighter>
        <div className="w-full p-4 mt-2 mb-2 bg-yellow-100 ">
        <h3 className=""> Result</h3> 
      <ul>
        <li><span className="text-sm">Sortable by default</span></li>
        <li><span className="text-sm">Booleans display as checkboxes</span></li>
      </ul>
        <br/>
     </div>
     
        
       <div className="w-full h-48 p-4 mb-4 bg-white" >
       <SuperTable json={data} />
       </div>
      </div>


      <SuperTable json={json} rowClick={rowClick} options={options} />
      <SuperTable json={cars} options={carOptions} />
    </div>
  )
}

export default Home;

