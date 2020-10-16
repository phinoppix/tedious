import Parser from './stream-parser';
import { InternalConnectionOptions } from '../connection';
import { InfoMessageToken, ErrorMessageToken } from './token';
export declare function infoParser(parser: Parser, options: InternalConnectionOptions, callback: (token: InfoMessageToken) => void): void;
export declare function errorParser(parser: Parser, options: InternalConnectionOptions, callback: (token: ErrorMessageToken) => void): void;
//# sourceMappingURL=infoerror-token-parser.d.ts.map