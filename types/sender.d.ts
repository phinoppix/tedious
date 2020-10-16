/// <reference types="node" />
import dgram from 'dgram';
import dns from 'dns';
declare type LookupFunction = (hostname: string, options: dns.LookupAllOptions, callback: (err: NodeJS.ErrnoException | null, addresses: dns.LookupAddress[]) => void) => void;
export declare class ParallelSendStrategy {
    addresses: dns.LookupAddress[];
    port: number;
    request: Buffer;
    socketV4: dgram.Socket | null;
    socketV6: dgram.Socket | null;
    onMessage: ((message: Buffer) => void) | null;
    onError: ((err: Error) => void) | null;
    constructor(addresses: dns.LookupAddress[], port: number, request: Buffer);
    clearSockets(): void;
    send(cb: (error: Error | null, message?: Buffer) => void): void;
    cancel(): void;
}
export declare class Sender {
    host: string;
    port: number;
    request: Buffer;
    parallelSendStrategy: ParallelSendStrategy | null;
    lookup: LookupFunction;
    constructor(host: string, port: number, lookup: LookupFunction, request: Buffer);
    execute(cb: (error: Error | null, message?: Buffer) => void): void;
    executeForIP(cb: (error: Error | null, message?: Buffer) => void): void;
    invokeLookupAll(host: string, cb: (error: Error | null, addresses?: dns.LookupAddress[]) => void): void;
    executeForHostname(cb: (error: Error | null, message?: Buffer) => void): void;
    createParallelSendStrategy(addresses: dns.LookupAddress[], port: number, request: Buffer): ParallelSendStrategy;
    executeForAddresses(addresses: dns.LookupAddress[], cb: (error: Error | null, message?: Buffer) => void): void;
    cancel(): void;
}
export {};
//# sourceMappingURL=sender.d.ts.map