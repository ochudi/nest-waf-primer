import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';
import { RolesModule } from './roles/roles.module';
import { DepartmentsModule } from './departments/departments.module';
import { EducationalHistoryModule } from './educational-history/educational-history.module';


@Module({
  imports: [UsersModule, StudentsModule, RolesModule, DepartmentsModule, EducationalHistoryModule ]
})
export class StudentRegistrationModule {}
