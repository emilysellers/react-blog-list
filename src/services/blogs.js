import { checkError, client } from './client.js';

export async function getBlogs() {
  const resp = await client.from('blogs').select('*');
  return checkError(resp);
}
