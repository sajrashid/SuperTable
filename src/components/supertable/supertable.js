import React, { useState, useEffect } from "react";
import _ from 'lodash'
import { Popup } from 'semantic-ui-react'
import './supertable.css'

const SuperTable = props => {
    let [json, updateJson] = useState(props.json || [])

    const options = props.options || {}
    const pageable = options.pageable || false
    const pageSize = options.pageSize || 10
    const hiddenColArr = options.hiddenCols || []
    const customColArr = options.customCols || []
    const idColIdx =  options.idCol ?  Object.keys(json[0]).indexOf(options.idCol):0
    const styles = options.styles || ''

    let [sortedJson, updateSortedJson] = useState(props.json || []) 
    let [pageCountArray, updatePageCountArray] = useState([])
    let [sortDirection, updateSortDirection] = useState(false)
    let [pageNo, updatePageNo] = useState(1)

    const [hasRan, updateHasRan] = useState(false)
    const columns = Object.keys(props.json[0] || {})
    const cssClasses = `supertable ${styles}`
    let [selectedRowId, updateSelectedRowId] = useState(null)

    //pagination
    const paginate = (array, page_size, page_number) => {
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    };

    if (pageable && hasRan === false) {
        let totalpages = props.json.length / pageSize;
        totalpages = Math.ceil(totalpages); //round up to the next largest whole number or integer.
        let pageCountArray = [];
        //change the 2 to a 3 and you'll see 3 pages it should be 1 (I think)
        for (let i = 1; i < totalpages + 1; i++) {
            pageCountArray.push(i);
        }
        updateHasRan(true);
        updatePageCountArray(pageCountArray);
        updateJson(paginate(props.json || [], pageSize, 0));
    } 

    const PagingClick = (e) => {
        e.preventDefault()
        const el = e.currentTarget
        el.style.textDecoration = "underline";
        pageNo = el.innerText
        updateJson(paginate(sortedJson, pageSize, pageNo - 1))
        updatePageNo(pageNo)
    }
    //end pagination

    const HeaderClick = (e) => {
        const col = e.currentTarget.innerText
        updateSortDirection(!sortDirection)
        let sorted = _.orderBy(props.json, col, sortDirection = sortDirection ? 'asc' : 'desc')
        updateSortedJson(sorted)
        updateJson(paginate(sorted, pageSize, pageNo - 1))
    }
   
    const rowClick = (e) => {
        updateSelectedRowId(parseInt(e.currentTarget.id))
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
 
    const CreateRows = () => {
        const cssClasses = `supertable ${styles}`

        return json.map((row, index) => {
            const rowId= row[Object.keys(row)[idColIdx]]
            return <tr id={rowId} className={selectedRowId === rowId ? "selectedRow" : "" }  key={index} onClick={rowClick}  >
                {CreateCells(row)}
            </tr>
        })
    }

    const createFooter = () => {
        return pageCountArray.map((key) => {
            return <a href="#!" className={cssClasses} onClick={PagingClick} key={key}>{key}</a>
        })
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

    const createMarkup = (html, value) => {
        return { __html: html }
    }

    if (json.length > 0) {
        return (
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

