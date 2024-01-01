import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { AuthUserService } from './auth-user.service';
import { AuthGuard } from './auth-user.guard';

@Controller('auth-users')
export class AuthUserController {
    constructor(private readonly service: AuthUserService){}

    @Post('sign-in')
    signIn(@Body() dto: SignInDto){
        return this.service.signIn(dto)
    }

    @UseGuards(AuthGuard)
    @Get()
    test(){
        return true
    }
}
