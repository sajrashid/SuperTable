import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import SuperTable from "../../components/supertable/supertable"
import './simple.css'
import cars from '../../data.json'
const Simple = props => {
    const data = [{ 'num': 0, 'Name': 'abc', 'IsReady': true }, { 'num': 1, 'Name': 'XYZ', 'IsReady': false }, { 'num': 3, 'Name': 'Cat', 'IsReady': true }]
  
    const options = {
        styles: 'table-fixed w-full',
        searchInputCss:'searchInputCss',
        cellStyles: 'border px-8 py-4 ',
        pageable:true,
        theadStyles: 'bg-blue-100 border  px-8 py-4',
        filters:true
    }

    const codeSimple = "const data=[\n {'num':0,'Name':'abc','IsReady':true},\n {'num':1,'Name':'XYZ','IsReady':false},\n {'num':3,'Name':'Cat','IsReady':true}\n ]\n \n <SuperTable json={data} /> "
    const codeSimpleOptions = "const options = {\n styles: 'table-fixed w-full',\n cellStyles: 'border px-8 py-4 ', \n theadStyles: 'bg-blue-100 border  px-8 py-4' \n } \n \n <SuperTable json={data} options={options} /> "


    return (
        <div className="w-full h-full mb-4 font-mono text-left ">
            <div className="fixed w-1/6 p-4 right-2">
                <ul className="" >
                    <li className='p-2 bg-gray-800'><a className="text-white underline " href="#simple">Simple</a></li>
                    <li className='p-2 bg-gray-600'><a className="text-white underline " href="#addcss">Add CSS</a></li>
                    <li className='p-2 bg-gray-800'><a className="text-white underline " href="#hide">Hide Colums</a></li>
                    <li className='p-2 bg-gray-600'><a className="text-white underline " href="#hide">Without Id</a></li>

                </ul>
            </div>
            <div id="simple" className="w-full h-full ">
               <div className="w-full p-4 mb-2 bg-green-50">
                <h2 className="w-full p-4 mb-2 text-xl bg-green-200 "> Simple example</h2>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {codeSimple}
                </SyntaxHighlighter>
                <div className="w-full mt-2 mb-2 bg-green-100 ">
                    <h3 className="p-2 bg-yellow-50 "> Result</h3>
                    <div className="p-2 bg-gray-800 text-gray-50">
                        <ul className="list-disc docmenu text-light-50" >
                            <li><span className="text-sm">Dynamic Json table</span></li>
                            <li><span className="text-sm">Does not require an Id Column</span></li>
                            <li><span className="text-sm">Creates a standard HTML table</span></li>
                            <li><span className="text-sm">Sortable by default (optional)</span></li>
                            <li><span className="text-sm">Booleans display as checkboxes (optional) </span></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full p-4 mb-4 bg-white" >
                    <SuperTable json={data} />
                </div>
                </div>
             
                <div className="w-full p-4">
                    <h2 className="w-full p-4 mb-2 text-xl bg-green-200">Add CSS</h2>
                    <div id="addcss" className="w-full bg-green-100">
                        <SyntaxHighlighter language="javascript" style={docco}>
                            {codeSimpleOptions}
                        </SyntaxHighlighter>
                        <div className="w-full p-4 mt-2 mb-2 bg-yellow-100 ">
                            <h3 className=""> Result</h3>

                        </div>
                        <div className="w-full p-4 mb-4 bg-white" >
                            <SuperTable json={cars} options={options} />
                        </div>
                    </div>
                </div>
                <h2 className="w-full p-4 mt-4 mb-2 text-xl bg-green-200">Hide Colums, remove checkboxes</h2>
                <div id="hide" className="w-full text-left bg-green-100">
                    <SyntaxHighlighter language="javascript" style={docco}>
                        {codeSimpleOptions}
                    </SyntaxHighlighter>
                    <div className="w-full p-4 mt-2 mb-2 bg-yellow-100 ">
                        <h3 className=""> Result</h3>

                    </div>
                    <div className="w-full p-4 mb-4 bg-white" >
                        <SuperTable json={data} options={options} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Simple;

