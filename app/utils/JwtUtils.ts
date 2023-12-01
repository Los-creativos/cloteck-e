import * as jose from 'jose';

const KEY = 'qz8yrcyAfz5iBVwBItQxQmC7INCAGiS2Hw5X';

export const SignJwt = async (data: Object, expiresIn?: string) => {
  const token = await new jose.SignJWT(data as jose.JWTPayload)
    .setProtectedHeader({alg: 'HS256'})
    .setIssuedAt()
    .setExpirationTime(expiresIn ? expiresIn : '5h')
    .sign(new TextEncoder().encode(KEY))
  return token;
}

export const VerifyJwt = async (token: string) => {
  try {
    const { payload: jwtData } = await jose.jwtVerify(
        token, new TextEncoder().encode(KEY)
    )
    return jwtData;
} catch (error) {
    console.error(error);
    return false;}
}
