import db from './db.js';
import { encryptValue } from '../utils/crypto.js';
import { createId } from '../utils/id.js';

export async function getUserByName(name) {
  return await db.collection('users').findOne({ name });
}

export async function insertUser(user) {
  return await db.collection('drivers').insertOne({
    ...user,
    _id: createId(),
    password: encryptValue(user.password),
  });
}
