import {sendEventsToAmplitude} from "./utils";
import path from 'path';
import fs from 'fs';

export default function routes(server) {
  server.get('/', (req, res) => {

    // old school way to load html files into the brower
    // wanted to make the err handling a bit more explicit
    fs.readFile('index.html', (err, data) => {
      if(err){
         res.writeHead(404);
         res.write("Not Found!");
      }
      else{
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data);
      }
      res.end();
    })
  });

  server.post('/start/events', (req, res) => {
    sendEventsToAmplitude(res);
  })
}