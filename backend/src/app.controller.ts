import { Controller, Get, Req, Res, UnauthorizedException, UseGuards, } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import * as jwt from 'jsonwebtoken';
import { frontendHost } from './constants';
import { GithubUser } from "./lib/github.strategy";
import { UserService } from "./service/user.service";
import { logger } from "./logger";

@Controller('auth')
export class AppController {
    constructor(private authService: UserService) {
    }

    @Get('github/login')
    @UseGuards(AuthGuard('github'))
    login() {
        // initiates the Github OAuth2 login flow
    }

    @Get('github/callback')
    @UseGuards(AuthGuard('github'))
    async callback(@Req() req: { user: GithubUser }, @Res() res): Promise<void> {
        if (!req.user?.id || !req.user.username) {
            return logger.error('Github callback is missing user.id or user.username');
        }
        const token = await this.authService.login(req.user);
        res.redirect(`${frontendHost}?token=${token}`);
    }
}
