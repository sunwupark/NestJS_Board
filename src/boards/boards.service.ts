import { Inject } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

//@Injectable()
export class BoardsService {
    constructor(@Inject(UsersService) private readonly usersService: UsersService) {}

    ServiceHello(): string {
        return 'Hello this is return without annotation injectable!';
      }
}
