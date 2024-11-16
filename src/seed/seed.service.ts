import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios
  
  async excecuteSeed() {
    const {data} = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=1')

    data.results.forEach(({name, url})=> {
      const segments = url.split('/')
      const no:number = +segments[segments.length - 2]

      console.log(`name: ${name}, no: ${no}`)

    })
    return data.results
  }
}
