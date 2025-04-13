import db from './db.mjs';

export async function getUserTournaments(userId) {
  return await db.collection('tournaments').find({ users: userId }).toArray();
}
