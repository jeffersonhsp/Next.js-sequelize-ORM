import { User } from '@/src/database/models/models'; 

export async function GET() {
  try {
    const users = await User.findAll()
    return new Response(JSON.stringify({ users }), {
      status: 200,
    })
  } catch (error) {
    return new Response(error.message, {
      status: 404,
    })
  }
}



