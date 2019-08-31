import React from "react";

const tfoot = props => {

    const pagerIcons= props.pagerIcons
    const createFooter = () => {
        let arr = Object.keys(pagerIcons)
        return arr.map((key, index) => {
            let html = pagerIcons[key]
            if (index === 2) {
                return <React.Fragment  key={index}>
                    <div><input onChange={props.pagingInputChange} value={props.pagerInput} type="number" /></div>
                    <button id={key} onClick={props.pagingClick} dangerouslySetInnerHTML={createMarkupB(html)}></button>
                </React.Fragment>
            }
            if (index === 3) {
                return <React.Fragment  key={index}>
                    <button  id={key} onClick={props.pagingClick} dangerouslySetInnerHTML={createMarkupB(html)}></button>
                    <div  className='pageCounter'>{props.pageNo}&nbsp;of&nbsp;{props.totalpages}&nbsp;pages</div>
                </React.Fragment>
            }
            return <button  key={index} id={key} onClick={props.pagingClick} dangerouslySetInnerHTML={createMarkupB(html)}></button>
        })
    }

    const createMarkupB = (html) => {
        return { __html: html }
    }

    return (
        {createFooter}
    )

}
export default  tfoot