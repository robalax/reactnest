import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { PersonsDto } from './dto/persons.dto';

@Module({
  imports: [TypeOrmModule.forFeature([PersonsDto])],
  providers: [PersonsService],
  controllers: [PersonsController],
})
export class PersonsModule {}
