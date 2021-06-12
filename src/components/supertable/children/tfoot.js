import React from "react";
import helper from "../helpers/helper"

const tfoot = props => {

    const pagerIcons= props.pagerIcons
    const createFooter = () => {
        let arr = Object.keys(pagerIcons)
        return arr.map((key, index) => {
            let html = pagerIcons[key]
            if (index === 2) {
                return <React.Fragment  key={index}>
                    <div><input onChange={props.pagingInputChange} value={props.pagerInput} type="number" /></div>
                    <button id={key} onClick={props.pagingClick} dangerouslySetInnerHTML={helper.createMarkup(html)}></button>
                </React.Fragment>
            }
            if (index === 3) {
                return <React.Fragment  key={index}>
                    <button  id={key} onClick={props.pagingClick} dangerouslySetInnerHTML={helper.createMarkup(html)}></button>
                    <div  className='pageCounter'>{props.pageNo}&nbsp;of&nbsp;{props.totalpages}&nbsp;pages</div>
                </React.Fragment>
            }
            return <button  key={index} id={key} onClick={props.pagingClick} dangerouslySetInnerHTML={helper.createMarkup(html)}></button>
        })
    }


    return (
        {createFooter}
    )

}
export default  tfoot