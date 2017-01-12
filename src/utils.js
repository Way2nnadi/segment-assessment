import Analytics from 'analytics-node';
import * as readline from 'readline';
import fs from 'fs';

let analytics = new Analytics('csDqnJdlycujIJhlE76Yheo8LdvTLIw9', { flushAt: 1 });

export function sendEventsToAmplitude(respnse) {
  let lineReader = readline.createInterface({
    input: fs.createReadStream('data/test.txt')
  })

  lineReader.on('line', (line) => {

    let event = JSON.parse(line);
    identifyAndTrackEvent(event);

  })
}

sendEventsToAmplitude()


function identifyAndTrackEvent(evt) {
  analytics.identify({
    userId: evt.userId,
    traits: {
      ...event
    }
  });

  analytics.track({
    event: evt.event || "Member Added",
    userId: evt.userId,
    integrations: {
      'All': false,
      'Amplitude': true
    }
  })
}





















