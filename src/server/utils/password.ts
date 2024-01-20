import crypto from 'crypto';

export async function hash(password: string) {
  return new Promise<string>((resolve, reject) => {
    // generate random 16 bytes long salt
    const salt = crypto.randomBytes(16).toString('hex');

    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(`${salt}:${derivedKey.toString('hex')}`);
    });
  });
}

export async function verify(password: string, hashString: string) {
  return new Promise((resolve, reject) => {
    const [salt, key] = hashString.split(':');
    // Mitigating timing attacks
    // https://dev.to/bdougherty/comment/1c1fa
    const keyBuffer = Buffer.from(key || '', 'hex');
    crypto.scrypt(password, salt || '', 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(crypto.timingSafeEqual(keyBuffer, derivedKey));
    });
  });
}
