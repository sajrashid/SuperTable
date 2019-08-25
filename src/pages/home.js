import React, { useState } from "react";
import SuperTable from '../components/supertable/supertable'
// functional component
const Home = props => {
  const json = [
    { 'ApiId': 1, 'Name': 'Mobility', 'Author': 'GW', 'Status': 'red', 'Desc': 'Some Data', 'DevStatus': 'Dev', 'CodeCoverage': '80%', 'Testing': false, 'IntTest': false, },
    { 'ApiId': 2, 'Name': 'GSD', 'Author': 'SS', 'Status': 'green', 'Desc': 'Some other', 'DevStatus': 'Live', 'CodeCoverage': '80%', 'Testing': true, 'IntTest': true },
    { 'ApiId': 3, 'Name': 'AiR', 'Author': 'SB', 'Status': 'red', 'Desc': 'Some Data', 'DevStatus': 'Pre-Prod', 'CodeCoverage': '80%', 'Testing': false, 'IntTest': false },
    { 'ApiId': 4, 'Name': 'SCCM', 'Author': 'MG', 'Status': 'red', 'Desc': 'Some Data', 'DevStatus': 'Live', 'CodeCoverage': '80%', 'Testing': false, 'IntTest': false },
    { 'ApiId': 5, 'Name': 'LH Freq', 'Author': 'SS', 'Status': 'orange', 'Desc': 'Some Data', 'DevStatus': 'Dev', 'CodeCoverage': '80%', 'Testing': false, 'IntTest': true },
    { 'ApiId': 6, 'Name': 'AIR-Icons', 'Author': 'AR', 'Status': 'orange', 'Desc': 'Some Data', 'DevStatus': 'Pre-Prod', 'CodeCoverage': '80%', 'Testing': false, 'IntTest': true },
    { 'ApiId': 7, 'Name': 'Poeple', 'Author': 'SM', 'Status': 'green', 'Desc': 'Some Data', 'DevStatus': 'Pre-Prod', 'CodeCoverage': '80%', 'Testing': true, 'IntTest': true },
    { 'ApiId': 8, 'Name': 'Mobility', 'Author': 'GW', 'Status': 'red', 'Desc': 'Some Data', 'DevStatus': 'Dev', 'CodeCoverage': '80%', 'Testing': false, 'IntTest': false, },
    { 'ApiId': 9, 'Name': 'GSD', 'Author': 'SS', 'Status': 'green', 'Desc': 'Some other', 'DevStatus': 'Live', 'CodeCoverage': '80%', 'Testing': true, 'IntTest': true },
    { 'ApiId': 10, 'Name': 'AiR', 'Author': 'SB', 'Status': 'red', 'Desc': 'Some Data', 'DevStatus': 'Pre-Prod', 'CodeCoverage': '80%', 'Testing': false, 'IntTest': false },
    { 'ApiId': 11, 'Name': 'SCCM', 'Author': 'MG', 'Status': 'red', 'Desc': 'Some Data', 'DevStatus': 'Live', 'CodeCoverage': '80%', 'Testing': false, 'IntTest': false },
    { 'ApiId': 12, 'Name': 'LH Freq', 'Author': 'SS', 'Status': 'orange', 'Desc': 'Some Data', 'DevStatus': 'Dev', 'CodeCoverage': '80%', 'Testing': false, 'IntTest': true },
    { 'ApiId': 13, 'Name': 'AIR-Icons', 'Author': 'AR', 'Status': 'orange', 'Desc': 'Some Data', 'DevStatus': 'Pre-Prod', 'CodeCoverage': '80%', 'Testing': false, 'IntTest': true },
    { 'ApiId': 14, 'Name': 'Poeple', 'Author': 'SM', 'Status': 'green', 'Desc': 'Some Data', 'DevStatus': 'Pre-Prod', 'CodeCoverage': '80%', 'Testing': true, 'IntTest': true }
  ]
  const options = {
    editable: true,
    pageable:true,
    hiddenCols: ['ApiId'],
    footer: true,
    styles: "ui red padded striped celled fixed table",
    customCols:[{'Desc':'<i aria-hidden="true" className=" circle  info  icon"></i> content='}]
  }

  return (
    <div>
      <SuperTable json={json} options={options} />
    </div>
  )
}

export default Home;