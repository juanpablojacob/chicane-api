import { getTournament, deleteTournament } from '../../data/tournaments.mjs';

export async function GET(request) {
  const tournamentId = new URL(request.url).searchParams.get('tournamentId');
  if (!tournamentId) {
    return Response.json({ error: 'Missing tournamentId' }, { status: 400 });
  }
  const tournament = await getTournament(tournamentId);
  if (!tournament) {
    return Response.json({ error: 'Tournament not found' }, { status: 404 });
  }
  return Response.json(tournament);
}

export async function DELETE(request) {
  const tournamentId = new URL(request.url).searchParams.get('tournamentId');
  if (!tournamentId) {
    return Response.json({ error: 'Missing tournamentId' }, { status: 400 });
  }
  const tournaments = await deleteTournament(tournamentId);
  return new Response(null, { status: 204 });
}
