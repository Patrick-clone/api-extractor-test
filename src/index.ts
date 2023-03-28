declare const Integer: unique symbol;

export type Integer = number & { [Integer]: never };
