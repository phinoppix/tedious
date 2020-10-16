/// <reference types="node" />
import { Duplex } from 'stream';
import * as tls from 'tls';
import { Socket } from 'net';
import { EventEmitter } from 'events';
import Debug from './debug';
import Message from './message';
import IncomingMessageStream from './incoming-message-stream';
import OutgoingMessageStream from './outgoing-message-stream';
declare class MessageIO extends EventEmitter {
    socket: Socket;
    debug: Debug;
    tlsNegotiationComplete: boolean;
    incomingMessageStream: IncomingMessageStream;
    outgoingMessageStream: OutgoingMessageStream;
    securePair?: {
        cleartext: tls.TLSSocket;
        encrypted: Duplex;
    };
    constructor(socket: Socket, packetSize: number, debug: Debug);
    packetSize(...args: [number]): number;
    startTls(secureContext: tls.SecureContext, hostname: string, trustServerCertificate: boolean): void;
    encryptAllFutureTraffic(): void;
    tlsHandshakeData(data: Buffer): void;
    sendMessage(packetType: number, data?: Buffer, resetConnection?: boolean): Message;
    pause(): void;
    resume(): void;
}
export default MessageIO;
//# sourceMappingURL=message-io.d.ts.map