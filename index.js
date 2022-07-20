const fs = require('fs-extra')
const path = require('path')
const convert= require ('./convert')
const filePath = process.argv[2]

fs.readJSON(filePath)
.then((sourceJSON) => {
    const structuredJSON = convert(sourceJSON)
    return structuredJSON
}).then((structuredJSON) => {
    fs.writeJSON(path.join(__dirname, '/output_structured.JSON'), structuredJSON, {
        spaces: '\t'
    })
})
.catch((err) => console.error(err))