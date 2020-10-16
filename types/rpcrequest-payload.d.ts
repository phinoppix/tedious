/// <reference types="node" />
import Request from './request';
import { Parameter } from './data-type';
import { InternalConnectionOptions } from './connection';
declare class RpcRequestPayload implements Iterable<Buffer> {
    request: Request;
    procedure: string | number;
    options: InternalConnectionOptions;
    txnDescriptor: Buffer;
    constructor(request: Request, txnDescriptor: Buffer, options: InternalConnectionOptions);
    [Symbol.iterator](): Generator<Buffer, void, unknown>;
    generateData(): Generator<Buffer, void, unknown>;
    toString(indent?: string): string;
    generateParameterData(parameter: Parameter, options: any): Generator<Buffer, void, unknown>;
}
export default RpcRequestPayload;
//# sourceMappingURL=rpcrequest-payload.d.ts.map