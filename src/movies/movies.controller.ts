import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    
    @Get()
    getAll(){
        return "This will return all movies";
    }

    @Get('search')
    search(@Query('year') searchingYear:string){
        return `We are searching for a movie with a made after: ${searchingYear}`
    }

    @Get(':id')
    getOne(@Param("id") movieId:string){
        return `movie id: ${movieId}`;
    }

    @Post()
    create(@Body() movieData){
        console.log(movieData);
        return movieData;
    }

    @Delete(':id')
    remove(@Param('id') movieId:string){
        return `This will delete a movie ${movieId}`;
    }

    @Patch(':id')
    patchMovie(@Param('id') movieId:string, @Body() updateData){
        return {
            updatedMovie: movieId,
            ...updateData,
        };
    }
}
