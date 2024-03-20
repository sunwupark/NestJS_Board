import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { UsersController } from 'src/users/users.controller';
import { UsersService } from 'src/users/users.service';

@Controller('boards')
export class BoardsController {
    constructor(private readonly boardsService: BoardsService) {}

    @Get()
    getHello(): string {
        return this.boardsService.ServiceHello();
    }
}
