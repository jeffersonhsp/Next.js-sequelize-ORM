import { User } from '@/src/database/models/models'; 

export async function GET(request, { params }) {
    try {
        const user = await User.findByPk(params.id)
        if(!user) throw new Error("The user does not exist")
        return new Response(JSON.stringify(user), {
            status: 200,
        })
    } catch (error) {
        return new Response(error.message, {
            status: 404,
        })
    }
}