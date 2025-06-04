import { Controller, Get } from "@nestjs/common";


@Controller('/app')
class AppController {
  @Get('/hello')
  getRootRoute() {
    return "Hello World";
  }

  @Get('/bye')
  getByBye() {
    return "Bye World";
  }
}

export default AppController;