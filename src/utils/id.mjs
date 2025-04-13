import { randomBytes } from 'crypto';

export function createId() {
  return randomBytes(16).toString('hex');
}
