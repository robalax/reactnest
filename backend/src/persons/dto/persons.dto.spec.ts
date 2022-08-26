import { PersonsDto } from './persons.dto';

describe('PersonsDto', () => {
  it('should be defined', () => {
    expect(new PersonsDto()).toBeDefined();
  });
});
