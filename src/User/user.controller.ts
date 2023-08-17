import { Controller, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { userDto } from './dto/user.dto';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('test')
    post(@Body() body: userDto){
        console.log('awogdwaod')
        return this.userService.post(body);
    }

}
