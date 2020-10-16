import { PassThrough } from 'readable-stream';
declare class Message extends PassThrough {
    type: number;
    resetConnection: boolean;
    ignore: boolean;
    constructor({ type, resetConnection }: {
        type: number;
        resetConnection?: boolean;
    });
}
export default Message;
//# sourceMappingURL=message.d.ts.map