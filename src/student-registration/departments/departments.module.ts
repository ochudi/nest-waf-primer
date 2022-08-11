import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Department } from './entities/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department, User])],
  controllers: [DepartmentsController],
  providers: [DepartmentsService]
})
export class DepartmentsModule { }
