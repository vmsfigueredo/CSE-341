const displayName = (req, res) => {
    const info = {
        student: "Vitor Figueredo",
        appTitle: "CSE 341 API",
    }

    const documentation = {
        contact: [
            {
                endpoint: "/contact",
                method: "GET",
                purpose: "Get all contacts from DB",
            },
            {
                endpoint: "/contact/:id",
                method: "GET",
                purpose: "Get specific contact from DB",
            }
        ]
    }
    res.json({
        ...info,
        message: `Welcome to ${info.appTitle} :)`,
        documentation
    })
}

module.exports = {
    displayName
}