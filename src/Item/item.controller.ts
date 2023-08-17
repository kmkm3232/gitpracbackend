import { Controller, Post, Body, Put, Delete, Param, Get } from '@nestjs/common';
// import { userDto } from './dto/user.dto';
import { ItemService } from './item.service';
@Controller('item')
export class ItemController {
    constructor(private readonly itemService: ItemService) {}

    // @Post('test')
    // post(@Body() body: userDto){
    //     console.log('awogdwaod')
    //     return this.userService.post(body);
    // }

    @Get('')
    get(){
        const results = this.itemService.findAll()
        return results
    }

}
