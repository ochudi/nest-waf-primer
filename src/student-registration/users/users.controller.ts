import { Controller, Get, Post, Body, Put, Param, Delete, Render, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) { }

  @Get('create')
  @Render('users/create-user.html')
  createForm() {
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Get(':userId/educationalHistory')
  loadUserRelation(@Param('userId') userId: number) {
    // return this.usersService.loadUserRelation(+userId);
  }

  @Get(':userId/educationalHistory/:educationalHistoryId')
  setEducationalHistoryById1(@Param('userId') userId: number, @Param('educationalHistoryId') educationalHistoryId: number) {
    return this.usersService.setEducationalHistoryById(+userId, +educationalHistoryId);
  }

  @Patch(':userId/educationalHistory/:educationalHistoryId')
  setEducationalHistoryById(@Param('userId') userId: number, @Param('educationalHistoryId') educationalHistoryId: number) {
    return this.usersService.setEducationalHistoryById(+userId, +educationalHistoryId);
  }

  @Delete('educationalHistory/:educationalHistoryId')
  unsetUserEducationalHistoryById(@Param('educationalHistoryId') educationalHistoryId: number) {
    return this.usersService.unsetEducationalHistoryById(+educationalHistoryId);
  }

  @Get(':userId/department')
  loadUserRelation1(@Param('userId') userId: number) {
    // return this.usersService.loadUserRelation(+userId);
  }

  @Get(':userId/department/:departmentId')
  setDepartmentById1(@Param('userId') userId: number, @Param('departmentId') departmentId: number) {
    return this.usersService.setDepartmentById(+userId, +departmentId);
  }

  @Patch(':userId/department/:departmentId')
  setDepartmentById(@Param('userId') userId: number, @Param('departmentId') departmentId: number) {
    return this.usersService.setDepartmentById(+userId, +departmentId);
  }

  @Delete('department/:departmentId')
  unsetDepartmentById(@Param('departmentId') departmentId: number) {
    return this.usersService.unsetDepartmentById(+departmentId);
  }

  @Get(':userId/roles')
  loadUserRelation2(@Param('userId') userId: number) {
    // return this.usersService.loadUserRelation(+userId);
  }

  @Get(':userId/roles/:roleId')
  setRoleById1(@Param('userId') userId: number, @Param('roleId') roleId: number) {
    return this.usersService.setRoleById(+userId, +roleId);
  }

  @Patch(':userId/roles/:roleId')
  setRoleById(@Param('userId') userId: number, @Param('roleId') roleId: number) {
    return this.usersService.setRoleById(+userId, +roleId);
  }

  @Delete('roles/:roleId')
  unsetRoleById(@Param('roleId') roleId: number) {
    return this.usersService.unsetRoleById(+roleId);
  }

  @Get(':userId/students')
  loadUserRelation3(@Param('userId') userId: number) {
    // return this.usersService.loadUserRelation(+userId);
  }

  @Get(':userId/students/:studentId')
  setStudentById(@Param('userId') userId: number, @Param('studentId') studentId: number) {
    return this.usersService.setStudentById(+userId, +studentId);
  }

  @Patch(':userId/students/:studentId')
  setStudentById1(@Param('userId') userId: number, @Param('studentId') studentId: number) {
    return this.usersService.setStudentById(+userId, +studentId);
  }

  @Delete('student/:studentId')
  unsetStudentById(@Param('studentId') studentId: number) {
    return this.usersService.unsetStudentById(+studentId);
  }

}