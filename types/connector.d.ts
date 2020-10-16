/// <reference types="node" />
import net from 'net';
import dns from 'dns';
export declare class ParallelConnectionStrategy {
    addresses: dns.LookupAddress[];
    options: {
        port: number;
        localAddress?: string;
    };
    constructor(addresses: dns.LookupAddress[], options: {
        port: number;
        localAddress?: string;
    });
    connect(callback: (err: Error | null, socket?: net.Socket) => void): void;
}
export declare class SequentialConnectionStrategy {
    addresses: dns.LookupAddress[];
    options: {
        port: number;
        localAddress?: string;
    };
    constructor(addresses: dns.LookupAddress[], options: {
        port: number;
        localAddress?: string;
    });
    connect(callback: (err: Error | null, socket?: net.Socket) => void): void;
}
declare type LookupFunction = (hostname: string, options: dns.LookupAllOptions, callback: (err: NodeJS.ErrnoException | null, addresses: dns.LookupAddress[]) => void) => void;
export declare class Connector {
    options: {
        port: number;
        host: string;
        localAddress?: string;
    };
    multiSubnetFailover: boolean;
    lookup: LookupFunction;
    constructor(options: {
        port: number;
        host: string;
        localAddress?: string;
        lookup?: LookupFunction;
    }, multiSubnetFailover: boolean);
    execute(cb: (err: Error | null, socket?: net.Socket) => void): void;
    lookupAllAddresses(host: string, callback: (err: NodeJS.ErrnoException | null, addresses: dns.LookupAddress[]) => void): void;
}
export {};
//# sourceMappingURL=connector.d.ts.map