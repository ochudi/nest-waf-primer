import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const newUser: User = this.userRepository.create(createUserDto)
    const userData = await this.userRepository.save(newUser);
    return userData;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where: {
        id
      }
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }

  async setStudentById(userId: number, studentId: number) {
    try {
      return await this.userRepository.createQueryBuilder()
        .relation(User, "student")
        .of(userId)
        .set(studentId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting student for user: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetStudentById(studentId: number) {
    try {
      return await this.userRepository.createQueryBuilder()
        .relation(User, "student")
        .of(studentId)
        .set(null)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting student for user: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async setEducationalHistoryById(userId: number, educationalHistoryId: number) {
    try {
      return await this.userRepository.createQueryBuilder()
        .relation(User, "educationalHistory")
        .of(userId)
        .set(educationalHistoryId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting educational history for user: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetEducationalHistoryById(educationalHistoryId: number) {
    try {
      return await this.userRepository.createQueryBuilder()
        .relation(User, "educationalHistory")
        .of(educationalHistoryId)
        .set(null)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting educational history for user: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async setDepartmentById(userId: number, departmentId: number) {
    try {
      return await this.userRepository.createQueryBuilder()
        .relation(User, "department")
        .of(userId)
        .set(departmentId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting department for user: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetDepartmentById(departmentId: number) {
    try {
      return await this.userRepository.createQueryBuilder()
        .relation(User, "department")
        .of(departmentId)
        .remove(null)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting department for user: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async setRoleById(userId: number, roleId: number) {
    try {
      return await this.userRepository.createQueryBuilder()
        .relation(User, "roles")
        .of(userId)
        .add(roleId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting role for user: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetRoleById(roleId: number) {
    try {
      return await this.userRepository.createQueryBuilder()
        .relation(User, "roles")
        .of(roleId)
        .remove(roleId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting role for user: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}