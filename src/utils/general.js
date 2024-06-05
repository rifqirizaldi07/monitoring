export const isEmptyValue = (value) => {
    return (
        value === undefined ||
        value === null ||
        (Array.isArray(value) && value.length === 0) ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0) ||
        (typeof value === 'number' && value < 1)
    )
}

export const isJson = (value) => {
    value = typeof value !== "string" ? JSON.stringify(value) : value

    try {
        value = JSON.parse(value)
    } catch (e) {
        return false
    }

    if (typeof value === "object" && value !== null) {
        return true
    }

    return false
}

export const isDomainAddress = (value) => {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value) || value.includes('localhost')) {
        return false
    }

    return true
}