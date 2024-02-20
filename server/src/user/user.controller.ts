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

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Roles(Role.Admin)
  @ApiOperation({ summary: 'Retrieve all users (Admin role required)' })
  @ApiResponse({
    status: 200,
    description: 'List of users retrieved successfully',
    type: Auth,
    isArray: true,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized or insufficient permissions',
  })
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
  @ApiOperation({ summary: 'Delete a user (Admin role required)' })
  @ApiBadRequestResponse({ description: 'Invalid user ID' })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized or insufficient permissions',
  })
  @UseGuards(RolesGuard)
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
  @ApiOperation({ summary: 'Get user by ID (Admin or Guest role required)' })
  @ApiParam({ name: 'id', description: 'User ID', type: String })
  @ApiResponse({
    status: 200,
    description: 'User retrieved successfully',
    type: Auth,
  })
  @ApiBadRequestResponse({ description: 'Invalid user ID' })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized or insufficient permissions',
  })
  @UseGuards(RolesGuard)
  @Roles(Role.Admin, Role.Guest)
  async getUser(@Param('id') id: string): Promise<Auth> {
    return this.userService.findOne(id);
  }
}