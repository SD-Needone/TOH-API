import { HEROES } from './../../mock-heroes';
import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class HeroesService {
    heroes = HEROES;

    getHeroes(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.heroes);
        });
    }

    getHero(heroID): Promise<any> {
        let id = Number(heroID);
        return new Promise(resolve => {
            const hero = this.heroes.find(hero => hero.id === id);
            if (!hero) {
                throw new HttpException('Hero does not exist!', 404);
            }
            resolve(hero);
        });
    }

    addHero(hero): Promise<any> {
        return new Promise(resolve => {
            this.heroes.push(hero);
            resolve(this.heroes);
        }); 
    }

    deleteHero(heroID): Promise<any> {
        let id = Number(heroID);
        return new Promise(resolve => {
            let index = this.heroes.findIndex(hero => hero.id === id);
            if (index === -1) {
                throw new HttpException('Hero does not exist!', 404);
            }
            this.heroes.splice(1, index);
            resolve(this.heroes);
        });
    }

    updateHero(hero): Promise<any> {
        return new Promise(resolve => {
            for (let i = 0; i < this.heroes.length; i++) {
                if (hero.id === this.heroes[i].id) {
                    this.heroes[i].name = hero.name;
                    resolve(this.heroes);
                }
            }
        });
    }
}
