
import React from "react";
import _ from 'lodash'


const Cells = props => {
    const options = props.options 
    const customColArr = options.customCols 
    const cellColorArr = options.cellColor 
    const hiddenColArr = options.hiddenCols 
    const columns = Object.keys(props.row)

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
    return(createCells(props.row))
}
export default Cells;