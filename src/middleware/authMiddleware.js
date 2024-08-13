const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {

    const token = req.header('Authorization');
    if (!token) return res.status(403).json({ error: 'Access denied!' });

    try {
        const bearerToken = token.split(' ')[1];
        const decoded = jwt.verify(bearerToken, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};


const verifyRole = (roles)=> {
    return(req, res, next)=> {
        if(!req.user || !roles.includes(req.user.role)){
            console.log('Access denied!');
            return res.status(403).json({error: 'Access denied!'})
        }
        next();
    }
};

const verifyMemberRole = (roles)=> {
    return(req, res, next)=> {
        if(!req.memberSquad || !roles.includes(req.memberSquad.role)){
            return res.status(403).json({error: 'Access denied!'})
        }
        next();
    }
};

module.exports = {
    verifyToken,
    verifyRole,
    verifyMemberRole
}