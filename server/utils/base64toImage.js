const fs = require("fs");

const base64toImage = (base64, id) => {

    const path = `public/${id}.jpg`

    fs.writeFile( path, base64, 'base64', function (error) {
        return error
    })

    return path
}

module.exports = base64toImage