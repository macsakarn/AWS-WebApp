const pool = require("../config");
// async function logger(req, res, next) {
//     const timestamp = new Date().toISOString().substring(0, 19)
//     console.log(`${timestamp} | ${req.method}: ${req.originalUrl}`)
//     next()
// }

async function loginAuth(req, res, next) {
    let authorization = req.headers.authorization

    if (!authorization) {
        return res.status(401).send('You are not logged in')
    }

    let [part1, part2] = authorization.split(' ')
    if (part1 !== 'Bearer' || !part2) {
        return res.status(401).send('You are not logged in')
    }

    // Check token
    const [tokens] = await pool.query('SELECT * FROM tokens WHERE token = ?', [part2])
    const token = tokens[0]
    if (!token) {
        return res.status(401).send('You are not logged in')
    }

    // Set user
    const [users] = await pool.query(
        'SELECT user_status, user_id, user_fname, user_lname, user_phone, user_image, user_username,user_password ' +
        'FROM user join account on(user.user_id = account.user_user_id) WHERE user_id = ?', [token.user_id]
    )
    req.user = users[0]

    next()
}

module.exports = {
    
    loginAuth
}