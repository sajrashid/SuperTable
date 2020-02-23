import React, { useState } from "react"
// import _ from 'lodash'

 const Filters = props => {
    // const options = props.options
    let  [searchFilter, updateSearchFilter] = useState()

    const createfilters = () => {
        const searchFilterChange = (e) => {
            updateSearchFilter(e.currentTarget.value)
            props.searchFilter(e.currentTarget.value)
        }
       
       return   <input onChange={searchFilterChange}  type='text' value={searchFilter}></input>
       
    }

    return (
        createfilters()
    )

}
export default Filters