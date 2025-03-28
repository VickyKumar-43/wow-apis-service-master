import { Injectable } from '@nestjs/common';

@Injectable()
export class ContinentService {
    private users = [
        { id: '1', name: 'Asia' },
        { id: '2', name: 'America'},
      ];
    
      getAllContinent() {
        console.log("get all continent" , this.users);
        return this.users;
      }
}
