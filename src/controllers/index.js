displayName = (req, res) => {
    const name = "Vitor Figueredo"
    res.status(200).send(name);
}

module.exports = {
    displayName
}