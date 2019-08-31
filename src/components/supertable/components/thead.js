import React from "react";
import _ from 'lodash'

const thead = props => {
    const options = props.options
    const hiddenColArr = options.hiddenCols || []
    const columns = Object.keys(props.json[0])

    const createHeader = () => {
        return columns.map((key) => {
            let isHidden = _.includes(hiddenColArr, key)
            if (!isHidden) {
                return <th key={key} onClick={props.headerClick} >{key}</th>
            }
            return null
        })
    }

    return (
        createHeader()
    )

}
export default thead