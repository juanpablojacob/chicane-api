import {
  getUserTournaments,
  createTournament,
} from '../../data/tournaments.mjs';

export async function GET(request) {
  const userId = new URL(request.url).searchParams.get('userId');
  if (!userId) {
    return Response.json({ error: 'Missing userId' }, { status: 400 });
  }
  const tournaments = await getUserTournaments(userId);
  return Response.json(tournaments);
}

export async function POST(request) {
  const tournament = await request.json();
  const { insertedId } = await createTournament(tournament);
  return Response.json({ _id: insertedId }, { status: 201 });
}
