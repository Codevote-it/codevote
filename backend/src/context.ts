import { Request } from "express";
import { UserService, JwtPayload } from "./service/user.service";

export interface Ctx {
    user?: JwtPayload
}

export function getContext(req: Request): Ctx {
    const token = req?.headers?.authorization;
    if (!token || token.indexOf('Bearer ') === -1) {
        return {}
    } else {
        return {
            user: UserService.decode(token.replace('Bearer ', ''))
        };
    }
}