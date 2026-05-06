// import { Controller } from '@nestjs/common';

// @Controller('startup')
// export class StartupController {}

import { Body, Controller, Post } from '@nestjs/common';
import { StartupService } from './startup.service';
import { CreateStartupDto } from './dto/create-startup.dto';

@Controller('startup')
export class StartupController {
  constructor(private readonly startupService: StartupService) {}

  @Post()
  create(@Body() dto: CreateStartupDto) {
    return this.startupService.createStartup(dto);
  }
}