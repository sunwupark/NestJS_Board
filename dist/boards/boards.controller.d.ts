import { BoardsService } from './boards.service';
export declare class BoardsController {
    private readonly boardsService;
    constructor(boardsService: BoardsService);
    getHello(): string;
}
