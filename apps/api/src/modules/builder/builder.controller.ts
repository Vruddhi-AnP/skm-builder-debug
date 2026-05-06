// import { Controller } from '@nestjs/common';

// @Controller('builder')
// export class BuilderController {}


import { Body, Controller, Post } from '@nestjs/common';
import { BuilderService } from './builder.service';
import { CreateBuilderDto } from './dto/create-builder.dto';

@Controller('builder')
export class BuilderController {
  constructor(private readonly builderService: BuilderService) {}

  @Post()
  save(@Body() dto: CreateBuilderDto) {
    return this.builderService.saveBuilder(dto);
  }
}