import { Controller, Get } from '@nestjs/common';
import { ContinentService } from './continent.service';

@Controller('singularis/continent')
export class ContinentController {
    constructor(private readonly continentService: ContinentService){}
    @Get()
    async getAllContinent(){
        return this.continentService.getAllContinent();
    }
}
