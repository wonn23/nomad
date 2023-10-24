import { Injectable, NotFoundException } from '@nestjs/common';
import {Movie} from './entities/movie.entity'

@Injectable()
export class MoviesService {
    private movies: Movie[] = []

    create(movieData) {
        this.movies.push({
            id: this.movies.length +1,
            ...movieData})
    }

    getAll(): Movie[] {
        return this.movies
    }

    getOne(id: string): Movie | undefined {
        const movie = this.movies.find(movie => movie.id === +id)
        if (!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`)
        } 
        return movie
    }

    deleteOne(id: string): void {
        const movie = this.getOne(id)
        if (!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`)
        } 
        this.movies = this.movies.filter(movie => movie.id !== +id)
    }

    update(id: string, updateData) {
        const movie = this.getOne(id)
        this.deleteOne(id)
        this.movies.push({...movie, ...updateData})
    }
}
