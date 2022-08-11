import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { User } from '../users/entities/user.entity';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentsService {

  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,

    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }
  
  async create(createDepartmentDto: CreateDepartmentDto) {
    const newDepartment = this.departmentRepository.create(createDepartmentDto);
    /*
    if (createDepartmentDto.users) {
      const newUser = this.userRepository.create(createDepartmentDto.users);
      const user: User[] = await this.userRepository.save(newUser);
      newDepartment.users = user;
    }
    */
    return this.departmentRepository.save(newDepartment)
  }

  async findAll() {
    return await this.departmentRepository.find({ relations: ['users'] });
  }

  async findOne(id: number) {
    return await this.departmentRepository.findOne({
      where: {
        id
      }
    });
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return await this.departmentRepository.update(id, updateDepartmentDto);
  }

  async remove(id: number) {
    return await this.departmentRepository.delete(id);
  }

  async setUserById(departmentId: number, userId: number) {
    try {
      return await this.departmentRepository.createQueryBuilder()
        .relation(Department, "users")
        .of(departmentId)
        .set(userId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for department: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetUserById(departmentId: number) {
    try {
      return await this.departmentRepository.createQueryBuilder()
        .relation(Department, "users")
        .of(departmentId)
        .set(null)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for department: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  } 
}
