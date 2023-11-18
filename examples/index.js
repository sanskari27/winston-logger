const Logger = require('../dist').default;
import Logger from '../dist';

Logger.info(
	'STATE',
	`Informational messages providing general details about system operations, serving as updates or status notifications.`
);

/**
 *
 * CONSOLE LOG
 * [18-Nov-2023 15:58:03]: STATE: Informational messages providing general details about system operations, serving as updates or status notifications.
 *
 * FILE LOG
 * {"label":"STATE","level":"INFO","message":"Informational messages providing general details about system operations, serving as updates or status notifications.","timestamp":"18-Nov-2023 15:58:03"}
 *
 */

Logger.critical(
	'CRITICAL ERROR OCCURRED',
	new Error('This will be the instance of error to be logged'),
	{
		example: 'These Objects to logged with the error',
	}
);

/**
 *
 *
 * CONSOLE LOG
 * Error: This will be the instance of error to be logged
 *   at Object.<anonymous> (/Users/sanskar/Code/templates/winston-logger/examples/index.js:10:2)
 *   at Module._compile (node:internal/modules/cjs/loader:1241:14)
 *   at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
 *   at Module.load (node:internal/modules/cjs/loader:1091:32)
 *   at Module._load (node:internal/modules/cjs/loader:938:12)
 *   at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
 *   at node:internal/main/run_main_module:23:47
 *
 * FILE LOG
 * {
 *    label: 'CRITICAL ERROR OCCURRED',
 *    err: Error: This will be the instance of error to be logged
 *        at Object.<anonymous> (/Users/sanskar/Code/templates/winston-logger/examples/index.js:10:2)
 *        at Module._compile (node:internal/modules/cjs/loader:1241:14)
 *        at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
 *        at Module.load (node:internal/modules/cjs/loader:1091:32)
 *        at Module._load (node:internal/modules/cjs/loader:938:12)
 *        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
 *        at node:internal/main/run_main_module:23:47,
 *    level: 'CRITICAL',
 *    timestamp: '18-Nov-2023 15:58:03'
 *  }
 *
 */

Logger.error('COMMON ERROR OCCURRED', new Error('This will be the instance of error to be logged'));

/**
 *
 *
 * CONSOLE LOG
 * [18-Nov-2023 15:58:03]: Error Logged: COMMON ERROR OCCURRED:
 *   Error: This will be the instance of error to be logged
 *   at Object.<anonymous> (/Users/sanskar/Code/templates/winston-logger/examples/index.js:18:2)
 *   at Module._compile (node:internal/modules/cjs/loader:1241:14)
 *   at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
 *   at Module.load (node:internal/modules/cjs/loader:1091:32)
 *   at Module._load (node:internal/modules/cjs/loader:938:12)
 *   at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
 *   at node:internal/main/run_main_module:23:47
 *
 * FILE LOG
 *
 * {
 *    label: 'COMMON ERROR OCCURRED',
 *    err: Error: This will be the instance of error to be logged
 *        at Object.<anonymous> (/Users/sanskar/Code/templates/winston-logger/examples/index.js:18:2)
 *        at Module._compile (node:internal/modules/cjs/loader:1241:14)
 *        at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
 *        at Module.load (node:internal/modules/cjs/loader:1091:32)
 *        at Module._load (node:internal/modules/cjs/loader:938:12)
 *        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
 *        at node:internal/main/run_main_module:23:47,
 *    level: 'ERROR',
 *    timestamp: '18-Nov-2023 15:58:03'
 *  }
 *
 */

Logger.http('https://abc.com', {
	type: 'response',
	label: 'Response',
	body: {
		count: 1,
		// Request Body here
	},
	request_id: '5f104d86-1f72-4948-8ce6-5ebb3d8c0b24',
	status: 200,
	response: {
		success: true,
		// Response Object here
	},
});

/**
 * FILE LOG
 *
 * {
 *    url: 'https://abc.com',
 *    type: 'response',
 *    label: 'Response',
 *    body: { count: 1 },
 *    request_id: '5f104d86-1f72-4948-8ce6-5ebb3d8c0b24',
 *    status: 200,
 *    response: { success: true },
 *    level: 'HTTP',
 *    timestamp: '18-Nov-2023 15:58:03'
 *  }
 */

Logger.debug('Line 17 User Object:', {
	example: 'These Objects to logged with the error',
});

/**
 * CONSOLE LOG
 * {
 *   label: undefined,
 *   message: 'Line 17 User Object:',
 *   level: 'DEBUG',
 *   timestamp: '18-Nov-2023 15:58:03'
 *  }
 *
 */
