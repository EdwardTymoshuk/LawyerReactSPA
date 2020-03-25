export const required = value => {
    if (value) return undefined;
    return "Field is required"
}
export const minLength = (minLength) => value => {
    if (value && value.length < minLength) return `Min length is ${minLength} symbols`
}
export const maxLength = (maxLength) => value => {
    if (value && value.length < minLength) return `Min length is ${maxLength} symbols`
}