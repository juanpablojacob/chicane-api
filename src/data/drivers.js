import db from './db.js';
import { createId } from '../utils/id.js';

export async function getDrivers(year) {
  return await db.collection('drivers').find({ year, active: true }).toArray();
}

export async function insertDrivers(drivers) {
  for (const driver of drivers) {
    driver._id = utils.createId();
  }
  return await db
    .collection('drivers')
    .insertMany(drivers.map((driver) => ({ _id: createId(), ...driver })));
}
