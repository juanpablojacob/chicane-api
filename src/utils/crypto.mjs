import {
  randomBytes,
  createHash,
  createCipheriv,
  createDecipheriv,
} from 'node:crypto';

const algorithm = 'aes-256-cbc';
const key = createHash('sha512')
  .update(process.env.CRYPTO_KEY)
  .digest('hex')
  .substring(0, 32);
const iv = randomBytes(16);

export function encryptValue(value) {
  const cipher = createCipheriv(algorithm, Buffer.from(key), iv);
  let encryptedContent = cipher.update(value, 'utf8', 'hex');
  encryptedContent += cipher.final('hex');
  return `${iv.toString('hex')}${encryptedContent}`;
}

export function decryptValue(value) {
  const iv = value.slice(0, 32);
  const encryptedContent = value.slice(32);
  const decipher = createDecipheriv(
    algorithm,
    Buffer.from(key),
    Buffer.from(iv, 'hex'),
  );
  let decryptedContent = decipher.update(encryptedContent, 'hex', 'utf8');
  decryptedContent += decipher.final('utf8');
  return decryptedContent;
}
