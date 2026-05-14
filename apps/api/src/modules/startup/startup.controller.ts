// import { Body, Controller, Post, UseGuards } from '@nestjs/common';

// import { StartupService } from './startup.service';

// import { CreateStartupDto } from './dto/create-startup.dto';

// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
// import { RolesGuard } from '../auth/guards/roles.guard';

// import { Roles } from '../auth/decorators/roles.decorator';
// import { GetUser } from '../auth/decorators/get-user.decorator';

// import { Role } from '../../common/enums/role.enum';

// @Controller('startup')
// export class StartupController {
//   constructor(private readonly startupService: StartupService) {}

//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles(Role.FOUNDER)
//   @Post()
//   create(@Body() dto: CreateStartupDto, @GetUser('id') userId: string) {
//     return this.startupService.create(dto, userId);
//   }
// }

import { Body, Controller, Post } from '@nestjs/common';

import { StartupService } from './startup.service';

import { CreateStartupDto } from './dto/create-startup.dto';

import { GetUser } from '../auth/decorators/get-user.decorator';
import { Auth } from '../auth/decorators/auth.decorator';

import { Role } from '../../common/enums/role.enum';

@Controller('startup')
export class StartupController {
  constructor(private readonly startupService: StartupService) {}

  @Auth(Role.FOUNDER)
  @Post()
  create(@Body() dto: CreateStartupDto, @GetUser('id') userId: string) {
    return this.startupService.create(dto, userId);
  }
}
