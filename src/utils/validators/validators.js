export const required = value => {
    return value ? undefined : "Field is required"
}
export const minLength = (minLength) => value => {
    if (value && value.length < minLength) return `Min length is ${minLength} symbols`
}
export const maxLength = (maxLength) => value => {
    if (value && value.length < minLength) return `Min length is ${maxLength} symbols`
}