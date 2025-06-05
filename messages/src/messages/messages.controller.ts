import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return "list of messages";
  }

  @Post()
  createMessage(
    @Body() body: any
  ) {
    console.log(body);
    return {
      message: 'Message created'
    }
  }

  @Get(':id')
  getMessage(
    @Param('id') id: string
  ) {
    console.log(id);
    return {
      id,
      message: 'Message retrieved'
    }
  }
}
