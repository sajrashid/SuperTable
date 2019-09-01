import React, { useState } from "react";
import _ from 'lodash'
import './supertable.css'
import Rows from './children/rows'
import Thead from './children/thead'
import Pager from './children/pager'

const SuperTable = props => {
    const options = props.options || {}
    const pageable = options.pageable || false
    const pageSize = options.pageSize || 10
    const [selectedRowId, updateSelectedRowId] = useState(null)
    const [sortedJson, updateSortedJson] = useState(props.json || [])
    const [pagerInput, updatePagerInput] = useState(1)
    let [sortDirection, updateSortDirection] = useState(false)
    const [pageNo, updatePageNo] = useState(1)
    const [hasRan, updateHasRan] = useState(false)

    const [json, updateJson] = useState(props.json || [])
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
        if (props.json.length > 0) {
            updateHasRan(true);
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
        if ((inputValue < totalpages + 1) && (inputValue > 0)) {
            updatePagerInput(inputValue)
            if (sortedJson.length < 1) {
                updateJson(paginate(props.json, pageSize, inputValue - 1))
            } else {
                updateJson(paginate(sortedJson, pageSize, inputValue - 1))

            }
             updatePageNo(inputValue)
        }
      
        e.target.select();
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
            const col = e.currentTarget.id
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


    if (json.length > 0) {
        return (
            <table className={cssClasses}  >
                <thead><tr>
                    <Thead json={json} options={options} headerClick={headerClick} />
                </tr></thead>
                <tbody>
                    <Rows json={json} options={options} selectedRowId={selectedRowId} rowClick={rowClick} />
                </tbody>
                <tfoot>
                    <tr >
                        {pageable &&
                            <td style={{ minWidth: '200px' }}><div className='pagerDiv' >
                                <Pager pagerIcons={pagerIcons} totalpages={totalpages} pagerInput={pagerInput} pageNo={pageNo} pagingClick={pagingClick} pagingInputChange={pagingInputChange} />
                            </div></td>
                        }
                    </tr>
                </tfoot>
            </table>
        )
    }
    return null
}
export default SuperTable;


