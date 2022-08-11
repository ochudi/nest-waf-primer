import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('home.html')
  getHome(): {} {
    return this.appService.getHome();
  }

  @Get('about-us')
  @Render('about-us.html')
  getAboutUs(): {} {
    return this.appService.getAboutUs();
  }

  @Get('users/create')
  @Render('users/create-user.html')
  createForm1() {

  }

  @Get('students/create')
  @Render('users/create-student.html')
  createForm2() {

  }

  @Get('departments/create')
  @Render('users/create-department.html')
  createForm3() {

  }

  @Get('roles/create')
  @Render('users/create-role.html')
  createForm4() {

  }

  @Get('educational-history/create')
  @Render('users/create-educationalHistory.html')
  createForm5() {

  }
}
