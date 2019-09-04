import React from "react";
import SuperTable from '../components/supertable/supertable'
import cars from '../data.json';
const Examples = props => {


  const options = {
    styles: "ui blue  striped fixed table",
    pageable: true,
    pageSize: 10,
    cellColor: ['Status'], // cells background color will be set from item data
    checkBox: true, // default is to show boolean values as checkbox
    hiddenCols: ['BitCoin Address'],
    /*eslint no-template-curly-in-string: "off"*/
    labelCols: [{ sold: 'Sold' }],
    customCols: [
      { 'Img': "<div style='min-height:6em;display:inline-block;'> <img src=${Img}></img><div>" },
      { 'Cost': "<div style='background-color:yellow;'>${Cost}</div>" },
      { 'Prod': '<div class="ui input"> <input type="text" class="hidden"  value=${Prod}/></div>' }
    ]

  }
  const mapOptions = () => {

    return (
      Object.keys(options).map((key, index) => {
        if (Array.isArray(options[key])) {
          let arr = Object.entries(options[key]);
          return arr.map((key2, i2) => {
            let xx = key2
            return <div> <div key={i2}> {key2 + " :"} {typeof arr} {typeof [key2]}
            </div></div>
          })
        }
        return <div key={index}> {key + " :"} {typeof options[key]} </div>
      })
    )
  }

  return (
    <div>
      <div>
        {mapOptions()}
      </div>
      <SuperTable json={cars} options={options} />
    </div>
  )
}

export default Examples;