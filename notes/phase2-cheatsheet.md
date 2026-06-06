# TypeScript Phase 2 Cheat Sheet

## 1. Interfaces
Used to define the shape (structure) of an object. Very useful for typing React Props.

```typescript
interface Product {
  title: string;
  price: number;
  isAvailable: boolean;
}

// Using the interface
const myProduct: Product = {
  title: "T-Shirt",
  price: 500,
  isAvailable: true
};
```
*Best Practice:* Interface names should start with a Capital letter.

## 2. Union Types (`|`)
Allows a variable to accept more than one type or specific values.

```typescript
// Can be string OR number
let id: string | number = 101;
id = "usr_101"; // Allowed

// Specific literal values
let orderStatus: "pending" | "shipped" | "delivered" = "pending";

// Mixed types
let result: true | "success" = "success";
```

## 3. Functions
You can specify the types for both parameters and the return value.

```typescript
// (param: type): returnType
function calculateDiscount(price: number, discount: number): number {
  return price - discount;
}

// Arrow function syntax
const greet = (name: string): string => {
  return `Hello ${name}`;
};

// If a function returns nothing, use `void`
const logMessage = (msg: string): void => {
  console.log(msg);
};
```
