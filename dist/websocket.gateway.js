"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketGateways = void 0;
const websockets_1 = require("@nestjs/websockets");
const ws_1 = require("ws");
const dayjs_1 = require("dayjs");
let WebSocketGateways = class WebSocketGateways {
    constructor() {
        this.nodeDetail = [];
    }
    handleConnection(socket) {
        console.log('Client connected');
        const intervalId = setInterval(() => {
            this.nodeDetail.push({
                Voltage: Math.floor(Math.random() * 101),
                updatedAt: (0, dayjs_1.default)().toISOString()
            });
            if (this.nodeDetail.length > 20)
                this.nodeDetail.shift();
            socket.send(JSON.stringify(this.nodeDetail));
        }, 10000);
        socket.on('close', () => {
            console.log('Client disconnected');
            clearInterval(intervalId);
        });
    }
    handleDisconnect() {
        console.log('Client disconnected');
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_a = typeof ws_1.Server !== "undefined" && ws_1.Server) === "function" ? _a : Object)
], WebSocketGateways.prototype, "server", void 0);
WebSocketGateways = __decorate([
    (0, websockets_1.WebSocketGateway)()
], WebSocketGateways);
exports.WebSocketGateways = WebSocketGateways;
//# sourceMappingURL=websocket.gateway.js.map