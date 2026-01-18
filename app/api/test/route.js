export async function GET(request) {
  return Response.json({
    status: "OK",
    message: "Test API is working",
    timestamp: new Date().toISOString(),
  });
}
