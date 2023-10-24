import { Controller, Get, Param, Post, Patch, Delete, Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';


@Controller('movies')
export class MoviesController {

  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll()
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.moviesService.getOne(id)
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Patch('/:id')
  update(@Param('id') movieId: string, @Body() updateData) {
    return this.moviesService.update(movieId, updateData)
  }
  
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.moviesService.deleteOne(id)
  }
}
