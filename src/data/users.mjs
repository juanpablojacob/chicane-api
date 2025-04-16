import db from './db.mjs';
import { encryptValue } from '../utils/crypto.mjs';
import { createId } from '../utils/id.mjs';

export async function getUserByName(name) {
  return await db.collection('users').findOne({ name });
}

export async function insertUser(user) {
  return await db.collection('users').insertOne({
    ...user,
    _id: createId(),
    password: encryptValue(user.password),
  });
}
