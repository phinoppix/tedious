import Parser from './stream-parser';
import { InternalConnectionOptions } from '../connection';
import { NBCRowToken } from './token';
declare function nbcRowParser(parser: Parser, options: InternalConnectionOptions, callback: (token: NBCRowToken) => void): void;
export default nbcRowParser;
//# sourceMappingURL=nbcrow-token-parser.d.ts.map