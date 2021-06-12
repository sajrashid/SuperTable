
import _ from 'lodash'


function templateLiteral(template, context = {}) {
    return template.replace(/\$\{\s*(.+?)\s*\}/g, (match, p1) => {
        const value = _.get(context, p1, '')
        return value === null ? '' : value
    });
}
const helper = {

    createMarkupLiteral(key, str, replaceValue) {
        const result = templateLiteral(str, {
            [key]: replaceValue
        });
        return { __html: result }
    },

    createMarkup(html) {
        return { __html: html }
    },


}


export default helper