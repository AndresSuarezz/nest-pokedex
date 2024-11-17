import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    
    private readonly http: AxiosAdapter
  ) {}

  async excecuteSeed() {
    try {
      this.pokemonModel.deleteMany({}).exec(); // delete * from pokemons

      const data = await this.http.get<PokeResponse>(
        'https://pokeapi.co/api/v2/pokemon?limit=650',
      );

      const pokemonInsert: { name: string; no: number }[] = [];

      data.results.forEach(async ({ name, url }) => {
        const segments = url.split('/');
        const no: number = +segments[segments.length - 2];

        //const pokemon = await this.pokemonModel.create({ no, name });

        pokemonInsert.push({ no, name });
      });

      this.pokemonModel.insertMany(pokemonInsert);

      return 'Seed executed';
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
