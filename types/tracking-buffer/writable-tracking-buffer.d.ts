/// <reference types="node" />
import JSBI from 'jsbi';
export declare type Encoding = 'utf8' | 'ucs2' | 'ascii';
/**
  A Buffer-like class that tracks position.

  As values are written, the position advances by the size of the written data.
  When writing, automatically allocates new buffers if there's not enough space.
 */
declare class WritableTrackingBuffer {
    initialSize: number;
    encoding: Encoding;
    doubleSizeGrowth: boolean;
    buffer: Buffer;
    compositeBuffer: Buffer;
    position: number;
    constructor(initialSize: number, encoding?: Encoding | null, doubleSizeGrowth?: boolean);
    get data(): Buffer;
    copyFrom(buffer: Buffer): void;
    makeRoomFor(requiredLength: number): void;
    newBuffer(size: number): void;
    writeUInt8(value: number): void;
    writeUInt16LE(value: number): void;
    writeUShort(value: number): void;
    writeUInt16BE(value: number): void;
    writeUInt24LE(value: number): void;
    writeUInt32LE(value: number): void;
    writeBigInt64LE(value: JSBI): void;
    private writeBigU_Int64LE;
    writeInt64LE(value: number): void;
    writeUInt32BE(value: number): void;
    writeUInt40LE(value: number): void;
    writeUInt64LE(value: number): void;
    writeBigUInt64LE(value: JSBI): void;
    writeInt8(value: number): void;
    writeInt16LE(value: number): void;
    writeInt16BE(value: number): void;
    writeInt32LE(value: number): void;
    writeInt32BE(value: number): void;
    writeFloatLE(value: number): void;
    writeDoubleLE(value: number): void;
    writeString(value: string, encoding?: Encoding | null): void;
    writeBVarchar(value: string, encoding?: Encoding | null): void;
    writeUsVarchar(value: string, encoding?: Encoding | null): void;
    writeUsVarbyte(value: any, encoding?: Encoding | null): void;
    writePLPBody(value: any, encoding?: Encoding | null): void;
    writeBuffer(value: Buffer): void;
    writeMoney(value: number): void;
}
export default WritableTrackingBuffer;
//# sourceMappingURL=writable-tracking-buffer.d.ts.map