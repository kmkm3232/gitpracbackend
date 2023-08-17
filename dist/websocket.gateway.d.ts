import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, WebSocket } from 'ws';
export declare class WebSocketGateways implements OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    nodeDetail: any[];
    handleConnection(socket: WebSocket): void;
    handleDisconnect(): void;
}
