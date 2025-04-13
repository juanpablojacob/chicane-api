import { getUserByName } from '../../data/users.js';
import { decryptValue } from '../../utils/crypto.js';

export async function POST(request) {
  const credentials = await request.json();
  const user = await getUserByName(credentials.name);
  if (!user) {
    return Response.json(
      { error: 'No user found with the given credentials' },
      { status: 401 },
    );
  }
  if (credentials.password !== decryptValue(user.password)) {
    return Response.json({ error: 'Incorrect password' }, { status: 401 });
  }
  return Response.json({ _id: user._id, name: user.name });
}
