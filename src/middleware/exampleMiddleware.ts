import { Request, Response, NextFunction } from "express";
export const exampleMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // eslint-disable-next-line no-console
    console.log('Example middleware');
    next();
}
