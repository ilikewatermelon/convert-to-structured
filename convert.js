const convert = (sourceJSON) => {
    Object.entries(sourceJSON).forEach(([key, value]) => {
        if (typeof value === 'string') {
            sourceJSON[key] = {
                string: value
            } 
        } else {convert(value)}
    })

    return sourceJSON
}

module.exports = convert