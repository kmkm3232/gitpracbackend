import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dayjs from 'dayjs';
import * as WebSocket from 'ws';
async function bootstrap() {
  
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3001);
  
  // const server = new WebSocket.Server({ port: 8080 });
  // const NodeDetail = []
  // console.log('WebSocket server started on port 8080');
  // server.on('connection', (socket) => {
  //   console.log('Client connected');
  //   const intervalId = setInterval(() => {
  //   NodeDetail.push({
  //     Voltage: Math.floor(Math.random() * 101),
  //     updatedAt: dayjs()
  //   })
  //   if (NodeDetail.length > 20 ) NodeDetail.shift()

  //     //const randomNumber = Math.floor(Math.random() * 101);
  //     socket.send(JSON.stringify(NodeDetail));
  //   }, 10000);

  //   socket.on('close', () => {
  //     console.log('Client disconnected');
  //     clearInterval(intervalId);
  //   });
  // });

}
bootstrap();
