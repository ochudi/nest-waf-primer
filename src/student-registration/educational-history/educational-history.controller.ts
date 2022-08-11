import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EducationalHistoryService } from './educational-history.service';
import { CreateEducationalHistoryDto } from './dto/create-educational-history.dto';
import { UpdateEducationalHistoryDto } from './dto/update-educational-history.dto';

@Controller('educational-history')
export class EducationalHistoryController {
  constructor(private readonly educationalHistoryService: EducationalHistoryService) { }

  @Post()
  create(@Body() createEducationalHistoryDto: CreateEducationalHistoryDto) {
    return this.educationalHistoryService.create(createEducationalHistoryDto);
  }

  @Get()
  findAll() {
    return this.educationalHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.educationalHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEducationalHistoryDto: UpdateEducationalHistoryDto) {
    return this.educationalHistoryService.update(+id, updateEducationalHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.educationalHistoryService.remove(+id);
  }

  @Patch(':educationalHistoryId/user/userId')
  setUserById(@Param('educationalHistoryId') educationalHistoryId: number, @Param('userId') userId: number) {
    return this.educationalHistoryService.setUserById(educationalHistoryId, userId);
  }

  @Delete(':educationalHistoryId/user')
  unsetUserById(@Param('educationalHistoryId') educationalHistoryId: number) {
    return this.educationalHistoryService.unsetUserById(educationalHistoryId);
  }
}
