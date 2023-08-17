import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from '../entity/Item';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

@Module({
    imports: [TypeOrmModule.forFeature([Item])],
    providers: [ItemService],
    exports: [ItemService],
    controllers: [ItemController]
})
export class ItemModule {}
