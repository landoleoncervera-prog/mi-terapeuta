export async function POST(request) {
  const {message} = await request.json();
  return Response.json({respuesta: `Hola, soy tu IA terapeuta. Tu mensaje: ${message}`});
}
