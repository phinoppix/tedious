import Parser from './stream-parser';
import { InternalConnectionOptions } from '../connection';
import { RowToken } from './token';
declare function rowParser(parser: Parser, options: InternalConnectionOptions, callback: (token: RowToken) => void): void;
export default rowParser;
//# sourceMappingURL=row-token-parser.d.ts.map