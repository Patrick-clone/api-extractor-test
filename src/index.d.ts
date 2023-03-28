declare const Integer: unique symbol;
export declare type Integer = number & {
    [Integer]: never;
};
export {};
