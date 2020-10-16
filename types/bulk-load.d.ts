/// <reference types="node" />
import { EventEmitter } from 'events';
import Connection, { InternalConnectionOptions } from './connection';
import { Transform } from 'readable-stream';
import Message from './message';
import { DataType, Parameter } from './data-type';
/**
 * @private
 */
interface InternalOptions {
    checkConstraints: boolean;
    fireTriggers: boolean;
    keepNulls: boolean;
    lockTable: boolean;
}
export interface Options {
    /**
     * Honors constraints during bulk load, using T-SQL
     * [CHECK_CONSTRAINTS](https://technet.microsoft.com/en-us/library/ms186247(v=sql.105).aspx).
     * (default: `false`)
     */
    checkConstraints?: InternalOptions['checkConstraints'];
    /**
     * Honors insert triggers during bulk load, using the T-SQL [FIRE_TRIGGERS](https://technet.microsoft.com/en-us/library/ms187640(v=sql.105).aspx). (default: `false`)
     */
    fireTriggers?: InternalOptions['fireTriggers'];
    /**
     * Honors null value passed, ignores the default values set on table, using T-SQL [KEEP_NULLS](https://msdn.microsoft.com/en-us/library/ms187887(v=sql.120).aspx). (default: `false`)
     */
    keepNulls?: InternalOptions['keepNulls'];
    /**
     * Places a bulk update(BU) lock on table while performing bulk load, using T-SQL [TABLOCK](https://technet.microsoft.com/en-us/library/ms180876(v=sql.105).aspx). (default: `false`)
     */
    lockTable?: InternalOptions['lockTable'];
}
export declare type Callback = 
/**
 * A function which will be called after the [[BulkLoad]] finishes executing.
 *
 * @param rowCount the number of rows inserted
 */
(err: Error | undefined | null, rowCount?: number) => void;
interface Column extends Parameter {
    objName: string;
}
interface ColumnOptions {
    output?: boolean;
    /**
     * For VarChar, NVarChar, VarBinary. Use length as `Infinity` for VarChar(max), NVarChar(max) and VarBinary(max).
     */
    length?: number;
    /**
     * For Numeric, Decimal.
     */
    precision?: number;
    /**
     * For Numeric, Decimal, Time, DateTime2, DateTimeOffset.
     */
    scale?: number;
    /**
     * If the name of the column is different from the name of the property found on `rowObj` arguments passed to [[addRow]], then you can use this option to specify the property name.
     */
    objName?: string;
    /**
     * Indicates whether the column accepts NULL values.
     */
    nullable?: boolean;
}
declare class RowTransform extends Transform {
    /**
     * @private
     */
    columnMetadataWritten: boolean;
    /**
     * @private
     */
    bulkLoad: BulkLoad;
    /**
     * @private
     */
    mainOptions: BulkLoad['options'];
    /**
     * @private
     */
    columns: BulkLoad['columns'];
    /**
     * @private
     */
    constructor(bulkLoad: BulkLoad);
    /**
     * @private
     */
    _transform(row: Array<any>, _encoding: string, callback: (error?: Error) => void): void;
    /**
     * @private
     */
    _flush(callback: () => void): void;
}
/**
 * A BulkLoad instance is used to perform a bulk insert.
 *
 * Use [[Connection.newBulkLoad]] to create a new instance, and [[Connection.execBulkLoad]] to execute it.
 *
 * Example of BulkLoad Usages:
 *
 * ```js
 * // optional BulkLoad options
 * const options = { keepNulls: true };
 *
 * // instantiate - provide the table where you'll be inserting to, options and a callback
 * const bulkLoad = connection.newBulkLoad('MyTable', options, (error, rowCount) => {
 *   console.log('inserted %d rows', rowCount);
 * });
 *
 * // setup your columns - always indicate whether the column is nullable
 * bulkLoad.addColumn('myInt', TYPES.Int, { nullable: false });
 * bulkLoad.addColumn('myString', TYPES.NVarChar, { length: 50, nullable: true });
 *
 * // add rows
 * bulkLoad.addRow({ myInt: 7, myString: 'hello' });
 * bulkLoad.addRow({ myInt: 23, myString: 'world' });
 *
 * // execute
 * connection.execBulkLoad(bulkLoad);
 * ```
 */
declare class BulkLoad extends EventEmitter {
    /**
     * @private
     */
    error?: Error;
    /**
     * @private
     */
    canceled: boolean;
    /**
     * @private
     */
    executionStarted: boolean;
    /**
     * @private
     */
    streamingMode: boolean;
    /**
     * @private
     */
    table: string;
    /**
     * @private
     */
    timeout?: number;
    /**
     * @private
     */
    options: InternalConnectionOptions;
    /**
     * @private
     */
    callback: Callback;
    /**
     * @private
     */
    columns: Array<Column>;
    /**
     * @private
     */
    columnsByName: {
        [name: string]: Column;
    };
    /**
     * @private
     */
    firstRowWritten: boolean;
    /**
     * @private
     */
    rowToPacketTransform: RowTransform;
    message: Message;
    /**
     * @private
     */
    bulkOptions: InternalOptions;
    /**
     * @private
     */
    connection?: Connection;
    /**
     * @private
     */
    rows?: Array<any>;
    /**
     * @private
     */
    rst?: Array<any>;
    /**
     * @private
     */
    rowCount?: number;
    /**
     * @private
     */
    constructor(table: string, connectionOptions: InternalConnectionOptions, { checkConstraints, fireTriggers, keepNulls, lockTable, }: Options, callback: Callback);
    /**
     * Adds a column to the bulk load.
     *
     * The column definitions should match the table you are trying to insert into.
     * Attempting to call addColumn after the first row has been added will throw an exception.
     *
     * ```js
     * bulkLoad.addColumn('MyIntColumn', TYPES.Int, { nullable: false });
     * ```
     *
     * @param name The name of the column.
     * @param type One of the supported `data types`.
     * @param __namedParameters Type [[ColumnOptions]]<p> Additional column type information. At a minimum, `nullable` must be set to true or false.
     * @param length For VarChar, NVarChar, VarBinary. Use length as `Infinity` for VarChar(max), NVarChar(max) and VarBinary(max).
     * @param nullable Indicates whether the column accepts NULL values.
     * @param objName  If the name of the column is different from the name of the property found on `rowObj` arguments passed to [[addRow]], then you can use this option to specify the property name.
     * @param precision For Numeric, Decimal.
     * @param scale For Numeric, Decimal, Time, DateTime2, DateTimeOffset.
    */
    addColumn(name: string, type: DataType, { output, length, precision, scale, objName, nullable }: ColumnOptions): void;
    /**
     * @private
     */
    colTypeValidation(column: Column, value: any): void;
    /**
     * Adds a row to the bulk insert. This method accepts arguments in three different formats:
     *
     * ```js
     * bulkLoad.addRow( rowObj )
     * bulkLoad.addRow( columnArray )
     * bulkLoad.addRow( col0, col1, ... colN )`
     * ```
     * * `rowObj`
     *
     *    An object of key/value pairs representing column name (or objName) and value.
     *
     * * `columnArray`
     *
     *    An array representing the values of each column in the same order which they were added to the bulkLoad object.
     *
     * * `col0, col1, ... colN`
     *
     *    If there are at least two columns, values can be passed as multiple arguments instead of an array. They
     *    must be in the same order the columns were added in.
     *
     * @param input
     */
    addRow(...input: [{
        [key: string]: any;
    }] | Array<any>): void;
    /**
     * @private
     */
    getOptionsSql(): string;
    /**
     * @private
     */
    getBulkInsertSql(): string;
    /**
     * This is simply a helper utility function which returns a `CREATE TABLE SQL` statement based on the columns added to the bulkLoad object.
     * This may be particularly handy when you want to insert into a temporary table (a table which starts with `#`).
     *
     * ```js
     * var sql = bulkLoad.getTableCreationSql();
     * ```
     *
     * A side note on bulk inserting into temporary tables: if you want to access a local temporary table after executing the bulk load,
     * you'll need to use the same connection and execute your requests using [[Connection.execSqlBatch]] instead of [[Connection.execSql]]
     */
    getTableCreationSql(): string;
    /**
     * @private
     */
    getColMetaData(): Buffer;
    /**
     * Sets a timeout for this bulk load.
     *
     * ```js
     * bulkLoad.setTimeout(timeout);
     * ```
     *
     * @param timeout The number of milliseconds before the bulk load is considered failed, or 0 for no timeout.
     *   When no timeout is set for the bulk load, the [[ConnectionOptions.requestTimeout]] of the Connection is used.
     */
    setTimeout(timeout?: number): void;
    /**
     * @private
     */
    createDoneToken(): Buffer;
    /**
     * Switches the `BulkLoad` object into streaming mode and returns a
     * [writable stream](https://nodejs.org/dist/latest-v10.x/docs/api/stream.html#stream_writable_streams)
     * that can be used to send a large amount of rows to the server.
     *
     * ```js
     * const bulkLoad = connection.newBulkLoad(...);
     * bulkLoad.addColumn(...);
     *
     * const rowStream = bulkLoad.getRowStream();
     *
     * connection.execBulkLoad(bulkLoad);
     * ```
     *
     * In streaming mode, [[addRow]] cannot be used. Instead all data rows must be written to the returned stream object.
     * The stream implementation uses data flow control to prevent memory overload. [`stream.write()`](https://nodejs.org/dist/latest-v10.x/docs/api/stream.html#stream_writable_write_chunk_encoding_callback)
     * returns `false` to indicate that data transfer should be paused.
     *
     * After that, the stream emits a ['drain' event](https://nodejs.org/dist/latest-v10.x/docs/api/stream.html#stream_event_drain)
     * when it is ready to resume data transfer.
     */
    getRowStream(): RowTransform;
    /**
     * @private
     */
    getMessageStream(): Message;
    /**
     * @private
     */
    cancel(): void;
}
export default BulkLoad;
//# sourceMappingURL=bulk-load.d.ts.map