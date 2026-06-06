# TypeScript Phase 1 Cheat Sheet

## Why TypeScript?
TypeScript is JavaScript with static typing. It catches errors at compile time (while you type) instead of runtime.

## Type Annotations
Defining the type of a variable explicitly using `: Type` syntax.
```typescript
let variableName: type = value;
```

## Basic Types

### 1. Primitives
```typescript
// String
let name: string = "Sahadat";

// Number
let age: number = 24;
let price: number = 99.99;

// Boolean
let isDev: boolean = true;
```

### 2. Arrays
All elements in the array must be of the specified type.
```typescript
let skills: string[] = ["React", "Next.js"];
let scores: number[] = [90, 85];
```

### 3. Tuples
An array with a fixed length and fixed types at specific positions.
```typescript
let coordinate: [number, number] = [23.8103, 90.4125];
let userStatus: [string, number] = ["active", 1];
```

### 4. Any (Avoid using this!)
Disables type checking for the variable.
```typescript
let something: any = "Hello";
something = 100; // Allowed, but bad practice!
```

## Quick Tips
- TypeScript errors in your editor (red squiggly lines) are your friends. They stop you from making bugs!
- Don't use `String` or `Number` (uppercase), always use `string` or `number` (lowercase).
