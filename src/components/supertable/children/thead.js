import React from "react";
import _ from 'lodash';
import helper from '../helpers/helper';

const thead = props => {
    const options = props.options
    const hiddenColArr = options.hiddenCols || []
    const columns = Object.keys(props.json[0])
    const labelColsArr = props.options.labelCols || []

    const createHeader = () => {
        return columns.map((key) => {
            const isHidden = _.includes(hiddenColArr, key)
            const isLabel = _.find(labelColsArr, key)
            return isHidden ? null :
                isLabel ? <th id={key} key={key} onClick={props.headerClick} dangerouslySetInnerHTML={helper.createMarkupLiteral(key, isLabel[key], key)}  ></th>
                    : <th id={key} key={key} onClick={props.headerClick} >{key}</th>
        })
    }

    return (
        createHeader()
    )

}
export default thead