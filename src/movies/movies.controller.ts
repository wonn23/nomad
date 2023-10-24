import { Controller, Get, Param, Post, Patch, Delete, Body, Query } from '@nestjs/common';


@Controller('movies')
export class MoviesController {
  @Get('search')
  search(@Query('year') searchingYear: number){
    return `We are searching for a movie made after ${searchingYear}`
  }

  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return one movie ${id}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Patch('/:id')
  update(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData
    };
  }
  
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `This will remove movie ${id}`;
  }
}
