import { getDrivers, insertDrivers } from '../../data/drivers.mjs';

export async function GET(request) {
  const params = new URL(request.url).searchParams;
  if (!params.has('year')) {
    return Response.json({ error: 'Missing year' }, { status: 400 });
  }
  const year = parseInt(params.get('year'));
  if (isNaN(year)) {
    return Response.json({ error: 'Invalid year' }, { status: 400 });
  }
  const drivers = await getDrivers(year);
  return Response.json(drivers);
}

export async function POST(request) {
  const drivers = await request.json();
  const { insertedCount } = await insertDrivers(drivers);
  return Response.json({ created: insertedCount }, { status: 201 });
}
