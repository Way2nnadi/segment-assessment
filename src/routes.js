import {sendEventsToAmplitude} from "./utils";

export default function routes(server) {
  let header = 'Authorization: ';
  server.get('/', (req, res) => {
    res.send('ok');
  });

  server.post('/start/events', (req, res) => {
    sendEventsToAmplitude(res);
    // res.send('ok')
  })
}