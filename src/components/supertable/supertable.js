import React, { useState } from "react";
import _ from 'lodash'
import './supertable.css'

const SuperTable = props => {
    const options = props.options || {}
    const pageable = options.pageable || false
    const pageSize = options.pageSize || 10
    const hiddenColArr = options.hiddenCols || []
    const customColArr = options.customCols || []
    const cellColorArr = options.cellColor || []
    let [selectedRowId, updateSelectedRowId] = useState(null)
    let [sortedJson, updateSortedJson] = useState(props.json || [])
    let [pagerInput, updatePagerInput] = useState(1)
    let [pageCountArray, updatePageCountArray] = useState([])
    let [sortDirection, updateSortDirection] = useState(false)
    let [pageNo, updatePageNo] = useState(1)
    const [hasRan, updateHasRan] = useState(false)
    const idColIdx = options.idCol ? Object.keys(props.json[0] || []).indexOf(options.idCol) : 0
    const columns = Object.keys(props.json[0] || {})
    let [json, updateJson] = useState(props.json || [])
    const styles = options.styles || ''
    const cssClasses = `supertable ${styles}`
    let totalpages = props.json.length / pageSize;
    totalpages = Math.ceil(totalpages)
    //pagination
    const paginate = (array, page_size, page_number) => {
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    };
    const pagerIcons = { first: '&lsaquo;', previous: '&laquo;', next: '&raquo', last: '&rsaquo;' }

    if (pageable && hasRan === false) {
        let pageCountArray = [];
        //change the 2 to a 3 and you'll see 3 pages it should be 1 (I think)
        for (let i = 1; i < totalpages + 1; i++) {
            pageCountArray.push(i);
        }
        if (props.json.length > 0) {
            updateHasRan(true);
            updatePageCountArray(pageCountArray);
            updateJson(paginate(props.json || [], pageSize, 0));
        }
    } else if (pageable === false && hasRan === false) {
        if (props.json.length > 0) {
            updateHasRan(true);
            updateJson(props.json);
        }
    }
    const pagingInputChange = (e) => {
        e.preventDefault()
        const el = e.currentTarget
        let inputValue = parseInt(el.value)
        if ((inputValue < totalpages) && (inputValue > 0)) {
            updatePagerInput(inputValue)
            if (sortedJson.length < 1) {
                updateJson(paginate(props.json, pageSize, inputValue - 1))
            } else {
                updateJson(paginate(sortedJson, pageSize, inputValue - 1))

            }
            updatePageNo(inputValue)
        }
    }

    const pagingClick = (e) => {
        e.preventDefault()
        const el = e.currentTarget
        let buttonName = el.id
        let newPageNo = 1
        switch (buttonName) {
            case 'first':
                break;
            case 'previous':
                newPageNo = pageNo < 2 ? pageNo : pageNo - 1
                break;
            case 'next':
                newPageNo = pageNo >= totalpages ? pageNo : pageNo + 1
                break;
            case 'last':
                newPageNo = totalpages
                break;
            default:
                break;
        }
        if (sortedJson.length < 1) {
            updateJson(paginate(props.json, pageSize, newPageNo - 1))
        }
        else {
            updateJson(paginate(sortedJson, pageSize, newPageNo - 1))

        }
        updatePagerInput(newPageNo)
        updatePageNo(newPageNo)
    }
    //end pagination

    const headerClick = (e) => {
        if (options.sortable !== false) {
            const col = e.currentTarget.innerText
            updateSortDirection(!sortDirection)
            let sorted = _.orderBy(props.json, col, sortDirection = sortDirection ? 'asc' : 'desc')
            updateSortedJson(sorted)
            let pagesize = pageable ? pageSize : props.json.length || 0
            updateJson(paginate(sorted, pagesize, pageNo - 1))
        }
    }

    const rowClick = (e) => {
        if (options.selectable !== false) {
            updateSelectedRowId(e.currentTarget.id)
        }
    }

    const createHeader = () => {
        return columns.map((key) => {
            let isHidden = _.includes(hiddenColArr, key)
            if (!isHidden) {
                return <th key={key} onClick={headerClick} >{key}</th>
            }
            return null
        })
    }

    const createRows = () => {
        return json.map((row, index) => {
            const rowId = row[Object.keys(row)[idColIdx]]
            // eslint-disable-next-line
            return <tr id={rowId} className={selectedRowId == rowId ? "selectedRow" : ""} key={index} onClick={rowClick}  >
                {createCells(row)}
            </tr>
        })
    }

    const createFooter = () => {
        let arr = Object.keys(pagerIcons)
        return arr.map((key, index) => {
            let html = pagerIcons[key]
            if (index === 2) {
                return <React.Fragment>
                    <div><input onChange={pagingInputChange} key={index} value={pagerInput} type="number" /></div>
                    <button id={key} onClick={pagingClick} dangerouslySetInnerHTML={createMarkupB(html)} key={index}></button>
                </React.Fragment>
            }
            if (index === 3) {
                return <React.Fragment>
                    <button id={key} onClick={pagingClick} dangerouslySetInnerHTML={createMarkupB(html)} key={index}></button>
                    <div className='pageCounter'>{pageNo}&nbsp;of&nbsp;{totalpages}&nbsp;pages</div>
                </React.Fragment>
            }
            return <button id={key} onClick={pagingClick} dangerouslySetInnerHTML={createMarkupB(html)} key={index}></button>

        })
    }

    const createCells = (row) => {
        return columns.map((key) => {
            let isHidden = _.includes(hiddenColArr, key)
            let isCustom = _.find(customColArr, key)
            let isCellColorArr = _.includes(cellColorArr, key)
            let isCheckBox = typeof row[key] === "boolean"
            if (!isHidden) {
                if (isCustom) {
                    return <td key={key} dangerouslySetInnerHTML={createMarkup(key, isCustom[key], row[key])} ></td>

                }
                if (isCellColorArr) {
                    return <td style={{ backgroundColor: row[key] }} key={key}  ></td>
                }
                if (isCheckBox && options.checkBox !== false) {
                    return <td key={key} > <input readOnly type='checkbox' checked={row[key]}></input> </td>
                }

                return <td key={key}>{row[key].toString()}</td>
            }
            return null
        })
    }
    const createMarkupB = (html) => {
        return { __html: html }
    }

    const templateLiteral = (template, context = {}) => {
        return template.replace(/\$\{\s*(.+?)\s*\}/g, (match, p1) => {
            const value = _.get(context, p1, '')
            return value === null ? '' : value
        });
    };

    const createMarkup = (key, str, replaceValue) => {
        const result = templateLiteral(str, {
            [key]: replaceValue
        });
        return { __html: result }
    }



    if (json.length > 0) {
        return (
            <table className={cssClasses}  >
                <thead><tr>{createHeader()}</tr></thead>
                <tbody>
                    {createRows()}
                </tbody>
                <tfoot>
                    <tr >
                        {pageable &&
                            <td style={{ minWidth: '200px' }}><div className='footerDiv' >{createFooter()}</div></td>
                        }
                    </tr>
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


