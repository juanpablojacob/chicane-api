import { getUserByName, insertUser } from '../../data/users.mjs';

export async function POST(request) {
  const user = await request.json();
  const userWithSameName = await getUserByName(user.name);
  if (userWithSameName) {
    return Response.json({ error: 'Username taken' }, { status: 409 });
  }
  const { insertedId } = await insertUser(user);
  return Response.json({ _id: insertedId }, { status: 201 });
}
