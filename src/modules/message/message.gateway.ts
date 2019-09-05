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
    // console.log(this.server)
    // return { event: "respo,ne", data }
  }
}
