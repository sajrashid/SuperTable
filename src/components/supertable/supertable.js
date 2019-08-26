import React, { useState, useEffect } from "react";
import _ from 'lodash'
import { Popup } from 'semantic-ui-react'
import './supertable.css'

const SuperTable = props => {
    const options = props.options || {}
    const pageable = options.pageable || false
    const pagesize=options.pagesize || 10 
    let [pageCountArray,updatePageCountArray] =useState([]) 
    let [json, updateJson] = useState([]) //TODO must fix causing extra renders as pagination is resetting state!
    const [hasRan, updateHasRan] = useState(false)
    
    const hiddenColArr = options.hiddenCols || []
    const customColArr = options.customCols || []
    const columns = Object.keys(props.json[0] || {})
    let [sortDirection, updateSortDirection] = useState(false)
    let styles = options.styles || ''
    const cssClasses = `supertable ${styles}` 
    //pagination
    let [pageNo, updatePageNo] = useState(1) 
    const paginate = (array, page_size, page_number) => {
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
      };
    
      if (pageable && hasRan === false) {
        let totalpages = props.json.length / pagesize;
        totalpages = Math.ceil(totalpages); //round up to the next largest whole number or integer.
        let pageCountArray = [];
        //change the 2 to a 3 and you'll see 3 pages it should be 1 (I think)
        for (let index = 1; index < totalpages + 1; index++) {
          pageCountArray.push(index);
        }
        updateHasRan(true);
        updatePageCountArray(pageCountArray);
        updateJson(paginate(props.json, pagesize, 0));
      }
    const PagingClick = (e) => {
        e.preventDefault()
        const el = e.currentTarget
        el.style.textDecoration = "underline";
        pageNo = el.innerText
        updateJson(paginate(props.json, pagesize, pageNo - 1))
        updatePageNo(pageNo)
    }
    //end pagination
    const createFooter = () => {
        return pageCountArray.map((key) => {
            return <a href="#!" className={cssClasses} onClick={PagingClick} key={key}>{key}</a>
        })
    }
    const HeaderClick = (e) => {
        const col = e.currentTarget.innerText
        updateSortDirection(!sortDirection)
        let sorted =_.orderBy(props.json, col, sortDirection = sortDirection ? 'asc' : 'desc')
        updateJson(paginate(sorted, pagesize, pageNo - 1))
    }
    const rowClick = (e) => {
        const row = e.currentTarget
    }
    const createHeader = () => {
        return columns.map((key) => {
            let isHidden = _.includes(hiddenColArr, key)
            if (!isHidden) {
                return <th key={key} onClick={HeaderClick} >{key}</th>
            }
            return null
        })
    }
    const createMarkup =(html, value) => {
        return { __html: html  }
    }
    const CreateCells = (row) => {
        return columns.map((key) => {
            let isHidden = _.includes(hiddenColArr, key)
            let isCustom = _.find(customColArr, key)
            let isCheckBox = typeof row[key] === "boolean"
            if (!isHidden) {
                if (isCustom) {
                    return <td key={key} dangerouslySetInnerHTML={createMarkup(isCustom[key], row[key])} ></td>
                }
                if (isCheckBox) {
                    return <td key={key} > <input readOnly type='checkbox' checked={row[key]}></input> </td>
                }
                return <td key={key}>{row[key]}</td>
            }
            return null
        })
    }
    const CreateRows = () => {
        return json.map((row, index) => {
            return <tr id={row[Object.keys(row)[1]]} key={index} onClick={rowClick}  >
                {CreateCells(row)}
            </tr>
        })
    }
    if (json.length > 0) {
        return   (
            <table className={cssClasses}  >
                <thead><tr>{createHeader()}</tr></thead>
                <tbody>
                    {CreateRows()}
                </tbody>
                <tfoot>
                    <tr><td>{createFooter()}</td></tr>
                </tfoot>
            </table>
        )
    }
    return (
        <table className={cssClasses}  >
              <thead><tr><td>Empty</td></tr></thead>
            <tr><td>Empty</td></tr>
        </table>
    )
}
export default SuperTable;

