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
    pageSize:10,// Optional Defaults to 10
    labelCols:[{userId: '<i aria-hidden="true" class=" circle  user  icon"></i> <a>${userId}</a>'}],
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
    dateCols:[{PurchaseDate:'en-GB'}], //specify locale info
    dateOptions : { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }, //optional
     //or specify locale  'en-GB'
    customCols: [{ 'BitCoin Address': '<i aria-hidden="true" class=" circle  info  icon"></i> content=${BitCoin Address}/>' }],
    styles: "ui red padded striped celled fixed table",
    // NB SelectedRow backgroundColor can be set from SuperTable styles default ALice-Blue
  }
  let [json, updateJson] = useState(null)

  // var NumberOfWords = 28
  // var words =  []
  // words[1] = "escapology"
  // words[2] = "brightwork"
  // words[3] = "verkrampte"
  // words[4] = "protectrix"
  // words[5] = "nudibranch"
  // words[6] = "grandchild"
  // words[7] = "newfangled"
  // words[8] = "flugelhorn"
  // words[9] = "mythologer"
  // words[10] = "pluperfect"
  // words[11] = "jellygraph"
  // words[12] = "quickthorn"
  // words[13] = "rottweiler"
  // words[14] = "technician"
  // words[15] = "cowpuncher"
  // words[16] = "middlebrow"
  // words[17] = "jackhammer"
  // words[18] = "triphthong"
  // words[19] = "wunderkind"
  // words[20] = "dazzlement"
  // words[21] = "jabberwock"
  // words[22] = "witchcraft"
  // words[23] = "pawnbroker"
  // words[24] = "thumbprint"
  // words[25] = "motorcycle"
  // words[26] = "cryptogram"
  // words[27] = "torchlight"
  // words[28] = "bankruptcy"

  // let jsonArr=[]
  // for (let i = 0; i < 10000; i++) {
  //   var rnd = Math.ceil(Math.random() * NumberOfWords)
  //   jsonArr.push({'id':i, 'ColA': words[rnd] + " " + words[rnd], 'ColB': words[rnd] + " " + words[rnd]+ " " + words[rnd],'ColC': words[rnd] + " " + words[rnd]+ " " + words[rnd]  + " " + words[rnd]+ " " + words[rnd] ,  'ColD': words[rnd] + " " + words[rnd],'ColE': words[rnd] + " " + words[rnd], })
  // }
  // let [jsonBig] = useState(jsonArr)








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
      <div>
      <SuperTable json={json} rowClick={rowClick} options={options} />
      <SuperTable json={cars} options={carOptions} /> 
    </div>
    )
}

export default Home;

