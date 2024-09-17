import { z } from 'zod';

const userSchema = z.object({
  name: z.string(),
  age: z.number().min(18), // must be 18 or older
});

const result = userSchema.safeParse({ name: "John", age: 25 });

if (result.success) {
  console.log("Valid user:", result.data);
} else {
  console.log("Validation error:", result.error);
}
