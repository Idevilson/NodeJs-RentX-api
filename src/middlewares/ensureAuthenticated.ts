import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementstions/UserRepository";

interface IPayload {
    sub: string; 
}

export async function ensureAuthenticated(
    request: Request, 
    response: Response, 
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new AppError("Token missing", 401);
    }
    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "2111c73f952a2a96be8af7352f14983a") as IPayload;   

        const usersRepository = new UsersRepository();
        const user = usersRepository.findById(user_id);

        if(!user) {
            throw new AppError("User does not exists!", 401);
        }
        
        request.user = {
            id: user_id
        }

        next();
    } catch {
        throw new AppError("Invalid token!", 401);
    }
}