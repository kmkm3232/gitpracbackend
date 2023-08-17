import { Controller, Post, Body, Put, Delete, Param, Get } from '@nestjs/common';
// import { userDto } from './dto/user.dto';
import { DepartmentService } from './department.service';
@Controller('department')
export class DepartmentController {
    constructor(private readonly departmentService: DepartmentService) {}

    // @Post('test')
    // post(@Body() body: userDto){
    //     console.log('awogdwaod')
    //     return this.userService.post(body);
    // }

    @Get('')
    get(){
        const results = this.departmentService.findAll()
        return results
    }

}
