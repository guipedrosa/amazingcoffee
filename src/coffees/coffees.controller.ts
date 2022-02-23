import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffesController {

    constructor(private readonly coffeesService: CoffeesService) { }

    @Get()
    async findAll(@Query() paginationQueryDTO: PaginationQueryDto) {
        //const { limit, offset } = paginationQuery;
        await new Promise(resolve => setTimeout(resolve, 5000));
        return this.coffeesService.findAll(paginationQueryDTO);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.coffeesService.findOne(id);
    }

    @Post()
    create(@Body() createCoffeeDTO: CreateCoffeeDto) {
        return this.coffeesService.create(createCoffeeDTO);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDTO: UpdateCoffeeDto) {
        return this.coffeesService.update(id, updateCoffeeDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeesService.remove(id);
    }
}
