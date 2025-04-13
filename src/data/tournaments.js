import db from './db.js';

export async function getUserTournaments(userId) {
  return await db.collection('tournaments').find({ users: userId }).toArray();
}
