import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SuperTable from "../../components/supertable/supertable"

const Simple = props => {
    const data = [{ 'id': 0, 'Name': 'abc', 'IsReady': true }, { 'id': 1, 'Name': 'XYZ', 'IsReady': false }, { 'id': 3, 'Name': 'Cat', 'IsReady': true }]
    const options = {
        styles: 'table-fixed w-full',
        cellStyles: 'border px-8 py-4 ',
        theadStyles: 'bg-blue-100 border  px-8 py-4',
      }
    
    const codeSimple = "const data=[\n {'id':0,'Name':'abc','IsReady':true},\n {'id':1,'Name':'XYZ','IsReady':false},\n {'id':3,'Name':'Cat','IsReady':true}\n ]\n \n <SuperTable json={data} /> "
    const codeSimpleOptions = "const options = {\n styles: 'table-fixed w-full',\n cellStyles: 'border px-8 py-4 ', \n theadStyles: 'bg-blue-100 border  px-8 py-4' \n } \n \n <SuperTable json={data} options={options} /> "
   
   
    return (
        <div className="w-full h-full p-4 mb-4 font-mono">
            <div className="w-full p-4 text-left bg-blue-900">
                <ul className="" >
                    <li className='p-2 bg-gray-800'><a className="text-white underline " href="#simple">Simple</a></li>
                    <li className='p-2 bg-gray-600'><a className="text-white underline " href="#addcss">Add CSS</a></li>
                    <li className='p-2 bg-gray-800'><a className="text-white underline " href="#hide">Hide Colums</a></li>

                </ul>
            </div>
            <div id="simple" className="w-full h-full text-left bg-green-100">
                <h2 className="w-full p-4 mb-2 text-xl bg-green-200"> Simple example</h2>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {codeSimple}
                </SyntaxHighlighter>
                <div className="w-full p-4 mt-2 mb-2 bg-yellow-100 ">
                    <h3 className=""> Result</h3>
                    <ul>
                        <li><span className="text-sm">Sortable by default</span></li>
                        <li><span className="text-sm">Booleans display as checkboxes</span></li>
                    </ul>
                </div>

                <div className="w-full p-4 mb-4 bg-white" >
                    <SuperTable json={data} />
                </div>
                <div className="w-full">
                <h2 className="w-full p-4 mb-2 text-xl bg-green-200">Add CSS</h2>
                    <div id="addcss" className="w-full text-left bg-green-100">
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

