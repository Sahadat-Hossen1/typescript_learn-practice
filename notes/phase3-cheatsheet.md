# TypeScript Phase 3 Cheat Sheet

## 1. Generics (`<T>`)
Generics allow you to create reusable components/functions that can work with any data type. The type is passed as a variable (`T`).

```typescript
// Function with Generic
function wrapInArray<T>(value: T): T[] {
  return [value];
}

// Usage
const stringArray = wrapInArray<string>("Hello"); // Returns: ["Hello"]
const numberArray = wrapInArray<number>(100);     // Returns: [100]

// React Example (useState)
// const [data, setData] = useState<User | null>(null);
```

## 2. Utility Types
Built-in tools to transform existing Interfaces without rewriting them.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}
```

### `Omit<Type, Keys>`
Removes specific properties from an Interface.
```typescript
type PublicUser = Omit<User, "email">;
// Result: { id: number; name: string; }
```

### `Pick<Type, Keys>`
Selects specific properties from an Interface.
```typescript
type UserContact = Pick<User, "name" | "email">;
// Result: { name: string; email: string; }
```

### `Partial<Type>`
Makes all properties in an Interface optional (`?`).
```typescript
type UpdateUser = Partial<User>;
// Result: { id?: number; name?: string; email?: string; }
```

## 3. Classes
TypeScript adds types and access modifiers to JavaScript classes.

```typescript
class Player {
  name: string;
  score: number;

  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }
}

const p1 = new Player("Sahadat", 100);
```

## Next Morning Task Reminder
1. Review this cheat sheet.
2. Complete the `intermediate.ts` exercise given in the chat.
3. Send the completed code for review!
flsdfjl