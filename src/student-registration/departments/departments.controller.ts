import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) { }

  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentsService.create(createDepartmentDto);
  }

  @Get()
  findAll() {
    return this.departmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentsService.update(+id, updateDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentsService.remove(+id);
  }

  @Get(':departmentId/users/userId')
  setUserById1(@Param('departmentId') departmentId: number, @Param('userId') userId: number) {
    return this.departmentsService.setUserById(departmentId, userId);
  }

  @Patch(':departmentId/users/userId')
  setUserById(@Param('departmentId') departmentId: number, @Param('userId') userId: number) {
    return this.departmentsService.setUserById(departmentId, userId);
  }

  @Delete(':departmentId/users')
  unsetUserById(@Param('studentId') studentId: number) {
    return this.departmentsService.unsetUserById(studentId);
  }
}
