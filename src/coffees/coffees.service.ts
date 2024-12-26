import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Bru Gold',
      brand: 'Bru',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffee = this.coffees.find((coffee) => coffee.id === id);
    if (!coffee) {
      throw new NotFoundException(`The coffee #${id} not found.`);
    }
    return coffee;
  }

  create(body) {
    //
  }

  update(id: number, body) {
    const coffee = this.findOne(id);
    if (coffee) {
      //
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((coffee) => coffee.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
