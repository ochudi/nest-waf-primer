import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../users/entities/user.entity';
import { CreateEducationalHistoryDto } from './dto/create-educational-history.dto';
import { UpdateEducationalHistoryDto } from './dto/update-educational-history.dto';
import { EducationalHistory } from './entities/educational-history.entity';

@Injectable()
export class EducationalHistoryService {
  constructor(
    @InjectRepository(EducationalHistory)
    private educationalHistoryRepository: Repository<EducationalHistory>,

    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async create(createEducationalHistoryDto: CreateEducationalHistoryDto) {
    const newEducationalHistory = this.educationalHistoryRepository.create(createEducationalHistoryDto);
    if (createEducationalHistoryDto.user) {
      const newUser = this.userRepository.create(createEducationalHistoryDto.user);
      const user: User = await this.userRepository.save(newUser);
      newEducationalHistory.user = user;
    }
    return this.educationalHistoryRepository.save(newEducationalHistory)
  }

  async findAll() {
    return await this.educationalHistoryRepository.find({ relations: ['user'] });
  }

  async findOne(id: number) {
    return await this.educationalHistoryRepository.findOne({
      where: {
        id
      }
    });
  }

  async update(id: number, updateEducationalHistoryDto: UpdateEducationalHistoryDto) {
    return await this.educationalHistoryRepository.update(id, updateEducationalHistoryDto);
  }

  async remove(id: number) {
    return await this.educationalHistoryRepository.delete(id);
  }

  async setUserById(educationalHistoryId: number, userId: number) {
    try {
      return await this.educationalHistoryRepository.createQueryBuilder()
        .relation(EducationalHistory, "user")
        .of(educationalHistoryId)
        .set(userId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for educational history: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetUserById(educationalHistoryId: number) {
    try {
      return await this.educationalHistoryRepository.createQueryBuilder()
        .relation(EducationalHistory, "user")
        .of(educationalHistoryId)
        .set(null)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for this educational history: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
