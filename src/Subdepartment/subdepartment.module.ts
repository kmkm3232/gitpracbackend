import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subdepartment } from '../entity/Subdepartment';
import { SubdepartmentController } from './subdepartment.controller';
import { SubdepartmentService } from './subdepartment.service';

@Module({
    imports: [TypeOrmModule.forFeature([Subdepartment])],
    providers: [SubdepartmentService],
    exports: [SubdepartmentService],
    controllers: [SubdepartmentController]
})
export class SubdepartmentModule {}
