import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { PersonsDto } from './dto/persons.dto';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(PersonsDto)
    private readonly personRepository: Repository<PersonsDto>,
  ) {}

  async searchPerson(query: any) {
    try {
      return await this.personRepository.find({
        where: {
          name: Like(`%${query}%`),
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
