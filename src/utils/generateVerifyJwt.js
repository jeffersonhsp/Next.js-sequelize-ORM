import { SignJWT, jwtVerify } from 'jose';

const encodedSecret = new TextEncoder().encode(process.env.JWT_SECRET);

// Função para gerar um token
export const generateToken = async (params) => {
  const signedToken = await new SignJWT({ id: params.id, user: params.user })
    .setProtectedHeader({ alg: 'HS256' })
    .sign(encodedSecret);
  if (!signedToken) {
    throw new Error('Failed to sign token');
  }
  return signedToken;
};

// Função para verificar um token
export const verifyToken = async (token) => {
  const { payload } = await jwtVerify(token, encodedSecret);
  return payload;
};