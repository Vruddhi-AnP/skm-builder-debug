// import { Controller } from '@nestjs/common';

// @Controller('startup')
// export class StartupController {}

// import { Body, Controller, Post, UseGuards } from '@nestjs/common';

// import { StartupService } from './startup.service';

// import { CreateStartupDto } from './dto/create-startup.dto';

// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
// import { RolesGuard } from '../auth/guards/roles.guard';

// import { Roles } from '../auth/decorators/roles.decorator';
// import { GetUser } from '../auth/decorators/get-user.decorator';

// @Controller('startup')
// export class StartupController {
//   constructor(private readonly startupService: StartupService) {}

//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles('founder')
//   @Post()
//   create(@Body() dto: CreateStartupDto, @GetUser() user: any) {
//     return this.startupService.create(dto, user.id);
//   }
// }

import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { StartupService } from './startup.service';

import { CreateStartupDto } from './dto/create-startup.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';

import { Roles } from '../auth/decorators/roles.decorator';
import { GetUser } from '../auth/decorators/get-user.decorator';

@Controller('startup')
export class StartupController {
  constructor(private readonly startupService: StartupService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('founder')
  @Post()
  create(@Body() dto: CreateStartupDto, @GetUser('id') userId: string) {
    return this.startupService.create(dto, userId);
  }
}
