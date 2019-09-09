import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsException,
  WsResponse,
  OnGatewayConnection
} from '@nestjs/websockets';
import { MessageService } from './message.service';


@WebSocketGateway()
export class MessageGateway {
  @WebSocketServer() server;

  constructor(private readonly messageService: MessageService) {
  }

  @SubscribeMessage('send')
  sendMessage(client, data) {
    this.server.emit('respone', data)
    // return { event: "respo,ne", data }
  }
}
