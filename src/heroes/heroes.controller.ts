import { HeroesService } from './heroes.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateHeroDTO } from './dto/create-hero.dto';
import { UpdateHeroDTO } from './dto/update-hero.dto';

@Controller('heroes')
export class HeroesController {
    constructor(private heroesService: HeroesService){}

    @Get()
    async getHeroes() {
        const heroes = await this.heroesService.getHeroes();
        return heroes;
    }

    @Get(':heroID')
    async getHero(@Param('heroID') heroID) {
        const hero = await this.heroesService.getHero(heroID);
        return hero;
    }

    @Post()
    async addHero(@Body() createHeroDTO: CreateHeroDTO) {
        const hero = await this.heroesService.addHero(createHeroDTO);
        return hero;
    }

    @Delete()
    async deleteHero(@Query() query) {
        const heroes = await this.heroesService.deleteHero(query.bookID);
        return heroes;
    }
    
    @Put()
    async updateHero(@Body() updateHeroDTO: UpdateHeroDTO) {
        const hero = await this.heroesService.updateHero(updateHeroDTO);
        return hero;
    }
}
