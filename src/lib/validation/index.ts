import * as z from "zod"

export const SignupValidation = z.object({
  name: z.string().min(2, { message: 'The name has to be more than 2 characters' }),
  username: z.string().min(2, { message: 'The username has to be more than 2 characters' }),
  email: z.string().email(),
  password: z.string().min(8, { message: 'The password has to be more than 8 characters' })
})
