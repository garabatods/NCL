export function onRequest() {
  return new Response("This route has moved to https://kumiplanner.app/.", {
    status: 410,
    headers: {
      "content-type": "text/plain; charset=UTF-8",
      "cache-control": "no-store"
    }
  });
}
