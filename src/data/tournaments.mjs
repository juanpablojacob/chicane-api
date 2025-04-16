import db from './db.mjs';
import { createId } from '../utils/id.mjs';

export async function getUserTournaments(userId) {
  return await db.collection('tournaments').find({ members: userId }).toArray();
}

export async function createTournament(tournament) {
  return await db
    .collection('tournaments')
    .insertOne({ ...tournament, _id: createId() });
}

export async function getTournament(tournamentId) {
  return await db.collection('tournaments').findOne({ _id: tournamentId });
}

export async function deleteTournament(tournamentId) {
  return await db.collection('tournaments').deleteOne({ _id: tournamentId });
}
