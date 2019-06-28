const accounts = [
    {user: 'admin', password: 'root'}
]
const auth = (req, res, next) => {
    const { authorization } = req.headers
    if (authorization) {
        const encoded = authorization.split(' ')[1]
        const decoded = Buffer.from(encoded, 'base64').toString()
        const user = decoded.split(':')[0]
        const password = decoded.split(':')[1]
        if(accounts.find((acc)=>acc.user === user && acc.password === password)) {
            next()
            return
        }
    }
    res.sendStatus(401)
}
module.exports = auth