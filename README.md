
# Functional Programming Practice with ts-belt

This repository is designed for practicing functional programming concepts using the TypeScript utility library **ts-belt**. Each exercise focuses on applying functional principles, using the powerful functions from `ts-belt`. The goal is to chain functions efficiently with **pipe**, whenever applicable, and solve the exercises step by step.

## Prerequisites

Ensure you have the following installed:
- **pnpm**: If you don't have pnpm installed, you can install it via npm:

```bash
npm install -g pnpm
```

## Installation

After cloning this repository, install the necessary dependencies using `pnpm`:

```bash
pnpm install
```

## Build the Code

To build the code for development, run:

```bash
pnpm build:dev
```

## Run the Development Server

In a separate terminal, start the development server:

```bash
pnpm start:dev
```

This will watch for changes and automatically rebuild the code as you work through the exercises.

## How to Work Through the Exercises

Each exercise should be solved within a function, focusing on applying the functional utilities provided by `ts-belt`. 

When chaining multiple functions together, always use the **pipe** utility from `ts-belt` to make your code more readable and functional. 

Here's an example of how to structure your code for chaining functions:

```typescript
import { pipe } from 'ts-belt';

function solveExercise(value: number) {
  return pipe(
    value,
    F.firstFunction, // Apply first function
    F.secondFunction // Then apply second function
  );
}
```

## Goal

The primary goal is to:
1. Understand and apply functional programming concepts.
2. Utilize `ts-belt` functions effectively.
3. Chain multiple functions using **pipe** from `ts-belt`.

Happy coding!
