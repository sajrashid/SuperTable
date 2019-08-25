import React, { useState, useEffect } from "react";
import _ from 'lodash'
import { Popup } from 'semantic-ui-react'
import  './supertable.css'

const SuperTable = props => {
    const options = props.options || {}
    const pageable = options.pageable || false
    const pagesize = options.pagesize || 10
    const [hasRan, updateHasRan] = useState(false)
    let [json, updateJson] = useState(props.json || [])
    const hiddenColArr = options.hiddenCols || []
    const customColArr = options.customCols || []
    const columns = Object.keys(json[0] || {})
    let [sortDirection, updateSortDirection] = useState(false)
    let cssClasses= options.styles || '';cssClasses+=' ' + 'supertable'
    let activeCss=''
    //pagination
    const paginate = (array, page_size, page_number) => {
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    }
    let totalpages = json.length / pagesize
    totalpages = Math.ceil(totalpages) //round up to the next largest whole number or integer.
    let pageCountArray = []
    for (let index = 1; index < totalpages + 2; index++) {
        pageCountArray.push(index)
    }
    if (pageable && hasRan === false) {
        updateHasRan(true)
        updateJson(paginate(props.json,pagesize, 0))
    }
    const PagingClick = (e) => {
        let pageNo = e.currentTarget.innerText
        updateJson(paginate(props.json,pagesize, pageNo-1))
    }
    //end pagination
    const createFooter = () => {
        return pageCountArray.map((key) => {
            return <a className={activeCss} onClick={PagingClick} key={key}>{key}</a>
        })
    }
    const HeaderClick = (e) => {
        let col = e.currentTarget.innerText
        updateSortDirection(!sortDirection)
        updateJson(_.orderBy(json, col, sortDirection = sortDirection ? 'asc' : 'desc'))
    }
    const rowClick = (e) => {
        let row = e.currentTarget

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
    function createMarkup(html, value) {
        return { __html: html + value + '/>' }
    }
    const CreateCells = (row) => {
        return columns.map((key) => {
            let booltest = row[key]
            let isHidden = _.includes(hiddenColArr, key)
            let isCustom = _.find(customColArr, key)
            let isCheckBox = typeof booltest === "boolean"
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
            return <tr id={row[Object.keys(row)[0]]} key={index} onClick={rowClick}  >
                {CreateCells(row)}
            </tr>
        })
    }
    return (
       
        <table  className={cssClasses}  >
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
export default SuperTable;

