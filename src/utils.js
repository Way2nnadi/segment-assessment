import Analytics from 'analytics-node';
import * as readline from 'readline';
import fs from 'fs';

// create an analytics instance - set it for development
let analytics = new Analytics('csDqnJdlycujIJhlE76Yheo8LdvTLIw9');

/*
  Exportable Functions
*/

/**
 * Reads each line from our events file as a stream
 * then identity the user and track the associated event
 * 
 * @param {Object} => the response object from the route
 */

export function sendEventsToAmplitude(response) {
  let lineReader = readline.createInterface({
    input: fs.createReadStream('data/test.txt')
  })

  lineReader.on('line', (line) => {
    let event = JSON.parse(line);
    identifyAndTrackEvent(event);
  })

  lineReader.on('close', () => {
    console.log('Events were all properly transfered to Amplitude');
  });

  response.send('ok');
}


/*
  Ultra Utility Functions
*/

/**
 * Identifies the user and tracks the associated event
 * 
 * @param {Object} 
 */
function identifyAndTrackEvent(evt) {
  analytics.identify({
    userId: evt.userId,
    traits: {
      ...evt
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





















