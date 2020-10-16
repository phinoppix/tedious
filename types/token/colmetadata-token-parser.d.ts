import { Metadata } from '../metadata-parser';
import Parser from './stream-parser';
import { InternalConnectionOptions } from '../connection';
import { ColMetadataToken } from './token';
export interface ColumnMetadata extends Metadata {
    /**
     * The column's name。
     */
    colName: string;
    tableName?: string | string[];
}
declare function colMetadataParser(parser: Parser, options: InternalConnectionOptions, callback: (token: ColMetadataToken) => void): void;
export default colMetadataParser;
//# sourceMappingURL=colmetadata-token-parser.d.ts.map