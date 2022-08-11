import { PartialType } from '@nestjs/mapped-types';
import { CreateEducationalHistoryDto } from './create-educational-history.dto';

export class UpdateEducationalHistoryDto extends PartialType(CreateEducationalHistoryDto) { }
