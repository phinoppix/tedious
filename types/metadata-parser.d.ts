import Parser from './token/stream-parser';
import { InternalConnectionOptions } from './connection';
import { DataType } from './data-type';
interface Collation {
    lcid: number;
    flags: number;
    version: number;
    sortId: number;
    codepage: string;
}
interface XmlSchema {
    dbname: string;
    owningSchema: string;
    xmlSchemaCollection: string;
}
interface UdtInfo {
    maxByteSize: number;
    dbname: string;
    owningSchema: string;
    typeName: string;
    assemblyName: string;
}
export interface Metadata {
    userType: number;
    flags: number;
    /**
     * The column's type, such as VarChar, Int or Binary.
     */
    type: DataType;
    collation: Collation | undefined;
    /**
     * The precision. Only applicable to numeric and decimal.
     */
    precision: number | undefined;
    /**
     * The scale. Only applicable to numeric, decimal, time, datetime2 and datetimeoffset.
     */
    scale: number | undefined;
    /**
     * The length, for char, varchar, nvarchar and varbinary.
     */
    dataLength: number | undefined;
    schema: XmlSchema | undefined;
    udtInfo: UdtInfo | undefined;
}
declare function readCollation(parser: Parser, callback: (collation: Collation | undefined) => void): void;
declare function metadataParse(parser: Parser, options: InternalConnectionOptions, callback: (metadata: Metadata) => void): void;
export default metadataParse;
export { readCollation };
//# sourceMappingURL=metadata-parser.d.ts.map