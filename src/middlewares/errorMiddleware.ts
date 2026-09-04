import express, {type Request, type Response, type NextFunction } from 'express';
import { NotFoundError } from '../errors/notFoundError.js';
import { BadRequestError } from '../errors/badRequestError.js';

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

    if(error instanceof BadRequestError){
        res.status(400).json({
            message: error.message,
            cause: error.cause
        });
        return;
    }

    res.status(500).json({
        message: "Internal Server Error",
        errorName: error.name,
        cause: error.cause,
        stack: error.stack
    });
}