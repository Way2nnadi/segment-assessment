export default function routes(server) {

  server.get('/', (req, res) => {
    res.send('ok');
  });
}