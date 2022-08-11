import { Module } from '@nestjs/common';
import { EducationalHistoryService } from './educational-history.service';
import { EducationalHistoryController } from './educational-history.controller';
import { EducationalHistory } from './entities/educational-history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';


@Module({
  imports: [TypeOrmModule.forFeature([EducationalHistory, User])],
  controllers: [EducationalHistoryController],
  providers: [EducationalHistoryService]
})
export class EducationalHistoryModule { }
