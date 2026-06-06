# 🎯 TypeScript Learning & Practice

Welcome to my TypeScript learning repository! As a React and Next.js developer, I am using this repository to learn TypeScript from basics to production level.

## 📚 What I Have Learned So Far

### Phase 1: Basics ✅
- **Why TypeScript?**: Understanding static typing and how it catches errors at compile time instead of runtime.
- **Type Annotations**: How to explicitly define the type of a variable (e.g., `let name: string = "Sahadat";`).
- **Primitive Types**: Working with `string`, `number`, and `boolean`.
- **Arrays**: Typing arrays with syntax like `string[]` or `number[]`.
- **Tuples**: Creating fixed-length arrays with specific types at each position (e.g., `[string, number]`).
- **The `any` Type**: Why to avoid it (it disables TypeScript's safety features).

### Phase 2: Foundation ✅
- **Interfaces**: Defining the structure of objects, which is extremely useful for typing React Props.
  ```typescript
  interface Product {
      title: string;
      price: number;
      isAvailable: boolean;
  }
  ```
- **Union Types (`|`)**: Allowing a variable to hold multiple types or specific literal values (e.g., `"pending" | "shipped" | "delivered"`).
- **Functions**: Typing both parameters and return values, ensuring functions receive the correct data and return what's expected.

### Phase 3: Intermediate (Up Next ⏳)
- **Generics (`<T>`)**: Writing reusable code that works with any data type.
- **Utility Types**: Using `Pick`, `Omit`, and `Partial` to transform existing interfaces.
- **Classes**: TypeScript's implementation of object-oriented classes with access modifiers.

## 📂 Folder Structure
- `exercises/`: Hands-on coding exercises for each topic.
- `notes/`: Cheat sheets and quick reference guides for different phases.
- `projects/`: Future mini-projects for production-level practice.

---
*Learning driven by AI, with a focus on real-world React & Next.js applications.*
