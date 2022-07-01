import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Chukwudi!';
  }

  getHello2(): {} {
    return { message: 'Hello Chudi!', title: 'chudi' };
  }

  getHome(): {} {
    return { title: 'Home Page' };
  }
  
  getAboutUs(): {} {
    return { title: 'About Us Page' };
  }
}
