import { Controller, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('test')
    post(){
        console.log('awogdwaod')
        return this.userService.post();
    }

}
