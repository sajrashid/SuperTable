import React from "react";
import SuperTable from '../components/supertable/supertable'

const Examples = props => {
  const data1 = [
    { 'ID': 1, 'Name': 'React', 'Desc': 'Shadow Dom', 'Testing': false, },
    { 'ID': 2, 'Name': 'Ember', 'Desc': 'Shadow Dom ???', 'Testing': true, },
    { 'ID': 3, 'Name': 'Knockout', 'Desc': '2 way databinding', 'Testing': false, },
    { 'ID': 4, 'Name': 'AngularJS', 'Desc': 'mvc ???', 'Testing': false, },
    { 'ID': 5, 'Name': 'Angular', 'Desc': '????', 'Testing': false, },
    { 'ID': 6, 'Name': 'Mithril', 'Desc': 'Shadow Dom', 'Testing': false, },
    { 'ID': 7, 'Name': 'BackBone', 'Desc': 'Lorun ipsum', 'Testing': true, },
    { 'ID': 8, 'Name': 'Angular', 'Desc': '????', 'Testing': false, },
    { 'ID': 9, 'Name': 'Mithril', 'Desc': 'Shadow Dom', 'Testing': false, },
    { 'ID': 10, 'Name': 'BackBone', 'Desc': 'Lorun ipsum', 'Testing': true, },
    { 'ID': 11, 'Name': 'Mithril', 'Desc': 'Shadow Dom', 'Testing': false, },
    { 'ID': 12, 'Name': 'BackBone', 'Desc': 'Lorun ipsum', 'Testing': true, }
    
  ]
  const data2 = [
    {  'Name': 'React', 'Desc': 'Some Data', 'Testing': false, },
    {  'Name': 'Ember', 'Desc': 'Some other', 'Testing': true, },
    {  'Name': 'Knockout', 'Desc': 'Some Data', 'Testing': false, },
    {  'Name': 'AngularJS', 'Desc': 'Some Data', 'Testing': false, },
    {  'Name': 'Angular', 'Desc': 'Some Data', 'Testing': false, },
    {  'Name': 'Mithril', 'Desc': 'Some Data', 'Testing': false, },
    {  'Name': 'BackBone', 'Desc': 'Some Data', 'Testing': true, },
    {  'Name': 'BackBone', 'Desc': 'Some Data', 'Testing': true, }
  ]
  const options1 = {
    pageable: true,
   // NB SelectedRow backgroundColor can be set from SuperTable styles default ALice-Blue
 }
  const options2 = {
       styles: "ui blue padded celled fixed table",
    // NB SelectedRow backgroundColor can be set from SuperTable styles default ALice-Blue
  }
  const options3= {
    hiddenCols: ['ID'], //Hide any column
    pageable: false,
    customCols: [{ 'Desc': "<div style='background-color:limegreen;'>${Desc}</div>" }],
    styles: "ui green  table",
    selectable:false // turns of row selection
    // NB SelectedRow backgroundColor can be set from SuperTable styles default ALice-Blue
  }
  return (
    <div>
      <div>
        <SuperTable json={data1} />
        <SuperTable json={data1} options={options1} />
      </div>
      <div>
        {/* this table will cause duplicate row selections as it
        has duplicate data in the first colum, specify and id 
        if the data in the first col contains duplicates */}
        <SuperTable json={data2} options={options2} />
      </div>
      <div>
        <SuperTable json={data1} options={options3} />
      </div>
    </div>
  )
}

export default Examples;