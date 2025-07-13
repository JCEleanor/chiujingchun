import { mockHackMDNotes } from "../../../lib/mock-data";

export async function GET() {
  // simulate server response time (1 second delay)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return Response.json(mockHackMDNotes);
}
