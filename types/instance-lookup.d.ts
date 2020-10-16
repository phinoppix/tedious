/// <reference types="node" />
import { Sender } from './sender';
import dns from 'dns';
declare type LookupFunction = (hostname: string, options: dns.LookupAllOptions, callback: (err: NodeJS.ErrnoException | null, addresses: dns.LookupAddress[]) => void) => void;
export declare class InstanceLookup {
    createSender(host: string, port: number, lookup: LookupFunction, request: Buffer): Sender;
    instanceLookup(options: {
        server: string;
        instanceName: string;
        timeout?: number;
        retries?: number;
        port?: number;
        lookup?: LookupFunction;
    }, callback: (message: string | undefined, port?: number) => void): void;
    parseBrowserResponse(response: string, instanceName: string): number | undefined;
}
export {};
//# sourceMappingURL=instance-lookup.d.ts.map