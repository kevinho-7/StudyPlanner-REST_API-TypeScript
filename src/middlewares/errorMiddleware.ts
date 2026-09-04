import express, {type Request, type Response, type NextFunction } from 'express';
import { NotFoundError } from '../errors/notFoundError.js';

export function errorHandler(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {

    if(error instanceof NotFoundError){
        res.status(404).json({
            message: error.message
        });
        return;
    }

    res.status(500).json({
        message: "Internal Server Error"
    });
}