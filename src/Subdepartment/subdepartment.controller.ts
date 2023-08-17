import { Controller, Post, Body, Put, Delete, Param, Get } from '@nestjs/common';
// import { userDto } from './dto/user.dto';
import { SubdepartmentService } from './subdepartment.service';
@Controller('subdepartment')
export class SubdepartmentController {
    constructor(private readonly subdepartmentService: SubdepartmentService) {}

    // @Post('test')
    // post(@Body() body: userDto){
    //     console.log('awogdwaod')
    //     return this.userService.post(body);
    // }

    @Get('')
    get(){
        const results = this.subdepartmentService.findAll()
        return results
    }

}
