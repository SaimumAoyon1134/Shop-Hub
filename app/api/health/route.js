// GET health check
export async function GET(request) {
  return Response.json({
    status: "OK",
    message: "API Server is running",
    timestamp: new Date().toISOString(),
  });
}
