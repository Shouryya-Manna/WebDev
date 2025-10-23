import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(1, "Enter at least 1 characters."),
  description: z.string().min(1, "Enter at least 1 characters."),
});

export type formSchemaType = z.infer<typeof formSchema>;
