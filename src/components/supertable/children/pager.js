import React from "react";


const pager = props => {
    const handleFocus = (e) => e.target.select();

    const createMarkupB = (html) => {
        return { __html: html }
    }

    const createPager = () => {
        let arr = Object.keys(props.pagerIcons)
      
        return arr.map((key, index) => {
           
            let html = props.pagerIcons[key]
           
            if (index === 2) {
               
               return <React.Fragment key={index}>
                    <div><input onFocus={handleFocus} onChange={props.pagingInputChange} value={props.pagerInput} type="number" /></div>
                    <button id={key} onClick={props.pagingClick} dangerouslySetInnerHTML={createMarkupB(html)}></button>
                </React.Fragment>
            }
           
            if (index === 3) {
               
               return <React.Fragment key={index}>
                    <button id={key} onClick={props.pagingClick} dangerouslySetInnerHTML={createMarkupB(html)}></button>
                    <div className='pageCounter'>{props.pageNo}&nbsp;of&nbsp;{props.totalpages}&nbsp;pages</div>
                </React.Fragment>
            }

            return <button key={index} id={key} onClick={props.pagingClick} dangerouslySetInnerHTML={createMarkupB(html)}></button>
        })
    }

    return (
        createPager()
    )

}

export default pager