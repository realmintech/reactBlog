import {
  Controller,
  Get,
  UseGuards,
  Request,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Role } from '../auth/entities/auth.entity';
import { Auth } from '../auth/entities/auth.entity';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/roles.guard';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiUnauthorizedResponse,
  ApiBadRequestResponse,
  ApiParam,
} from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Roles(Role.Admin)
  async findAll(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
  ) {
    const { users, total } = await this.userService.findAll(page, pageSize);
    return {
      users,
      total,
      page,
      pageSize,
    };
  }

  @Delete(':userId')
  @Roles(Role.Admin)
  async deleteUser(@Request() req, @Param('userId') userId: string) {
    const deletedUser = await this.userService.deleteUser(
      userId,
      req.user.role,
    );
    return {
      message: `User ${deletedUser.username} has been deleted successfully!`,
    };
  }

  @Get(':id')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin, Role.Guest)
  async getUser(@Param('id') id: string): Promise<Auth> {
    return this.userService.findOne(id);
  }
}
