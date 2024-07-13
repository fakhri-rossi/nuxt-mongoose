import { UserSchema } from "~/server/models/user.schema"

export default defineEventHandler(async (event) => {
  // return {
  //   hello: 'world'
  // }
  try {
    const users = await UserSchema.find({});
    return users;

  } catch (error) {
    return error
    
  }
})
