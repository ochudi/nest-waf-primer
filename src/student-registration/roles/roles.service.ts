import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { User } from '../users/entities/user.entity';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {

  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,

    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }
  
  async create(createRoleDto: CreateRoleDto) {
    const newRole = this.roleRepository.create(createRoleDto);
    /*
    if (createRoleDto.user) {
      const newUser = this.userRepository.create(createRoleDto.user);
      const user: User = await this.userRepository.save(newUser);
      newRole.user = user;
    }
    */
    return this.roleRepository.save(newRole)
  }

  async findAll() {
    return await this.roleRepository.find({ relations: ['users'] });
  }

  async findOne(id: number) {
    return await this.roleRepository.findOne({
      where: {
        id
      }
    });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return await this.roleRepository.update(id, updateRoleDto);
  }

  async remove(id: number) {
    return await this.roleRepository.delete(id);
  }

  async setRoleById(roleId: number, userId: number) {
    try {
      return await this.roleRepository.createQueryBuilder()
        .relation(Role, "users")
        .of(roleId)
        .add(userId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for role: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetRoleById(userId: number) {
    try {
      return await this.roleRepository.createQueryBuilder()
        .relation(Role, "users")
        .of(userId)
        .remove(userId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for role: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
