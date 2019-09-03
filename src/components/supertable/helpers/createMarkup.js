
import _ from 'lodash'

    const templateLiteral = (template, context = {}) => {
        return template.replace(/\$\{\s*(.+?)\s*\}/g, (match, p1) => {
            const value = _.get(context, p1, '')
            return value === null ? '' : value
        });
    };


export function createMarkup  (key, str, replaceValue) {
    const result = templateLiteral(str, {
        [key]: replaceValue
    });
    return { __html: result }
}