const { generateToken } = require('@/src/utils/generateVerifyJwt');
const bcrypt = require('bcryptjs');

import User from '@/src/database/models/user';

export async function POST(req, res) {
    const { user, password } = await req.json();
    const us = await User.findOne({ where: { user } });
    if (!us) {
        return new Response(JSON.stringify({ message: 'Invalid username or password' }), { status: 401 });
    }

    await bcrypt.compare(password, us.password, function (err) {
        if (err) {
            return new Response(JSON.stringify({ message: 'Invalid username or password' }), { status: 401 });
        }
    });

    const token = await generateToken(us);
    return new Response(JSON.stringify({ token }), { status: 200 });
}
