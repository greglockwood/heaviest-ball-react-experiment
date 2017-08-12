// @flow

export function format(val): string {
    if (Array.isArray(val)) {
        return `[${val.join(',')}]`;
    } else {
        return '' + val;
    }
}