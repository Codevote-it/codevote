import { Request } from "express";
import { AuthService, JwtPayload } from "./service/auth.service";

export interface Ctx {
    user?: JwtPayload
}

export function getContext(req: Request): Ctx {
    const token = req?.headers?.authorization;
    if (!token || token.indexOf('Bearer ') === -1) {
        return {}
    } else {
        return {
            user: AuthService.decode(token.replace('Bearer ', ''))
        };
    }
}