
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
            const isHidden = _.includes(hiddenColArr, key)
            const isCustom = _.find(customColArr, key)
            const isCellColorArr = _.includes(cellColorArr, key)
            const isCheckBox = typeof row[key] === "boolean"
            return isHidden ? null :
                isCustom ? <td key={key} dangerouslySetInnerHTML={createMarkup(key, isCustom[key], row[key])}></td> :
                    isCellColorArr ? <td style={{ backgroundColor: row[key] }} key={key}></td> :
                        isCheckBox && options.checkBox !== false ? <td key={key}> <input readOnly type='checkbox' checked={row[key]}></input></td> :
                            <td key={key}>{row[key].toString()}</td>

        })
    }
    return (createCells(props.row))
}
export default Cells;