import client from "@/monitoring/metrics";

export async function GET() {
  const metrics = await client.register.metrics();

  return new Response(metrics, {
    headers: {
      "Content-Type": client.register.contentType,
    },
  });
}
