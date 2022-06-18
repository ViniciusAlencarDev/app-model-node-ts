import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'Test@123';

const main = {
    createToken(id: number) {
        return jwt.sign({ id }, SECRET);
    },

    verifyToken(req: Request, res: Response, next: NextFunction) {
        const token: any = req.headers['x-access'];

        if(!token) {
            return res.status(400).send({
                success: false,
                message: 'Token not sended'
            })
        }

        jwt.verify(token, SECRET, (error: any, data: any) => {
            if(error) {
                return res.status(500).send({
                    success: false,
                    message: 'Token not valid'
                })
            }

            req = setId(req, data);

            next()
        })
    }
}

function setId(req: any, data: any) {
    req['id'] = data.id;
    return req;
}

export default main
