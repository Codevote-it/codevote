import { Controller, Get, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";
import { User } from "./types";
import * as jwt from 'jsonwebtoken';
import { UserDatastoreService } from "./datastore.service";

@Controller('auth')
export class AuthController {

    constructor(private userService: UserDatastoreService) {
    }

    @Get('github/login')
    @UseGuards(AuthGuard('github'))
    login() {
        // initiates the Github OAuth2 login flow
    }

    @Get('github/callback')
    @UseGuards(AuthGuard('github'))
    async callback(@Req() req: { user: User }, @Res() res): Promise<void> {
        if(!req.user?.id || !req.user.username) {
            throw new UnauthorizedException('Unable to get profile information from github callback')
        }
        const result = await this.userService.save(req.user);
        const token = AuthController.createToken(req.user);
        res.redirect(`http://localhost:4200?token=${token}`);
    }

    static createToken(user: User): string {
        return jwt.sign({
            data: {
                id: user.id,
                displayName: user.displayName,
                username: user.username,
                profileImageUrl: user.profileImageUrl
            }
        }, process.env.JWT_SECRET, { expiresIn: '150 days' });
    }

    static decode(token: string): User {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as any;
        return decoded.data as User
    }
}