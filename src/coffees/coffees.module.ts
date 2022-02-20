import { Module } from '@nestjs/common';
import { CoffesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

@Module({
    controllers: [CoffesController],
    providers: [CoffeesService]
})
export class CoffeesModule {}
