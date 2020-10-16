/// <reference types="node" />
import Debug from '../debug';
import { InternalConnectionOptions } from '../connection';
import JSBI from 'jsbi';
import { Transform } from 'readable-stream';
import { Token } from './token';
import { ColumnMetadata } from './colmetadata-token-parser';
declare class EndOfMessageMarker {
}
declare class Parser extends Transform {
    debug: Debug;
    colMetadata: ColumnMetadata[];
    options: InternalConnectionOptions;
    endOfMessageMarker: EndOfMessageMarker;
    buffer: Buffer;
    position: number;
    suspended: boolean;
    next?: () => void;
    constructor(debug: Debug, options: InternalConnectionOptions);
    _transform(input: Buffer | EndOfMessageMarker, _encoding: string, done: (error?: Error | undefined, token?: Token) => void): void;
    parseTokens(): void;
    suspend(next: () => void): void;
    awaitData(length: number, callback: () => void): void;
    readInt8(callback: (data: number) => void): void;
    readUInt8(callback: (data: number) => void): void;
    readInt16LE(callback: (data: number) => void): void;
    readInt16BE(callback: (data: number) => void): void;
    readUInt16LE(callback: (data: number) => void): void;
    readUInt16BE(callback: (data: number) => void): void;
    readInt32LE(callback: (data: number) => void): void;
    readInt32BE(callback: (data: number) => void): void;
    readUInt32LE(callback: (data: number) => void): void;
    readUInt32BE(callback: (data: number) => void): void;
    readBigInt64LE(callback: (data: JSBI) => void): void;
    readInt64LE(callback: (data: number) => void): void;
    readInt64BE(callback: (data: number) => void): void;
    readBigUInt64LE(callback: (data: JSBI) => void): void;
    readUInt64LE(callback: (data: number) => void): void;
    readUInt64BE(callback: (data: number) => void): void;
    readFloatLE(callback: (data: number) => void): void;
    readFloatBE(callback: (data: number) => void): void;
    readDoubleLE(callback: (data: number) => void): void;
    readDoubleBE(callback: (data: number) => void): void;
    readUInt24LE(callback: (data: number) => void): void;
    readUInt40LE(callback: (data: number) => void): void;
    readUNumeric64LE(callback: (data: number) => void): void;
    readUNumeric96LE(callback: (data: number) => void): void;
    readUNumeric128LE(callback: (data: number) => void): void;
    readBuffer(length: number, callback: (data: Buffer) => void): void;
    readBVarChar(callback: (data: string) => void): void;
    readUsVarChar(callback: (data: string) => void): void;
    readBVarByte(callback: (data: Buffer) => void): void;
    readUsVarByte(callback: (data: Buffer) => void): void;
}
export default Parser;
//# sourceMappingURL=stream-parser.d.ts.map