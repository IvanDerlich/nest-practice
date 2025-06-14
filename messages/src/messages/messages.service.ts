import { MessagesRepository} from './messages.repository'
import { Injectable } from '@nestjs/common';


@Injectable()
export class MessagesService {

  constructor(private messagesRepo: MessagesRepository){}

  async findOne(id: string){
    return this.messagesRepo.findOne(id);
  }

  async findAll(){
    return this.messagesRepo.findAll();
  }

  create(content: string){
    return this.messagesRepo.create(content);
  }
}