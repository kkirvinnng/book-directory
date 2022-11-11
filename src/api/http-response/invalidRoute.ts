import { Response, Request } from 'express'


const invalidRoute = (_: Request, res: Response) => {

    res.status(404).json({ success: false, message: 'Not Found' })
}

export default invalidRoute