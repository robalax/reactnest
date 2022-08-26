import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

//services
import { PersonsService } from './persons.service';

@Controller('persons')
export class PersonsController {
  constructor(private personsService: PersonsService) {}

  @Get()
  findAll(@Req() request: Request): any {
    const query = request.query.query;
    if (query) {
      return this.personsService.searchPerson(query);
    } else {
      return [];
    }
  }
}
