import { z } from "zod";

export const courseSchema = z.object({
    name:  z.string().min(3).max(15),
    description: z.string().min(2)
});
