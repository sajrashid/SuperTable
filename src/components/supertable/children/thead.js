import React from "react";
import _ from 'lodash'

const thead = props => {
    const options = props.options
    const hiddenColArr = options.hiddenCols || []
    const columns = Object.keys(props.json[0])
    const labelColsArr = props.options.labelCols || []

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

    const createHeader = () => {
        return columns.map((key) => {
            const isHidden = _.includes(hiddenColArr, key)
            const isLabel = _.find(labelColsArr, key)
            return isHidden ? null :
                isLabel ? <th id={key} key={key} onClick={props.headerClick} dangerouslySetInnerHTML={createMarkup(key, isLabel[key], key)}  ></th>
                    : <th id={key} key={key} onClick={props.headerClick} >{key}</th>
        })
    }

    return (
        createHeader()
    )

}
export default thead