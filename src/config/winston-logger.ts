import winston from 'winston';
import { CustomLevels, LEVEL } from '.';
import ConsoleLogger from '../transporter/ConsoleLogger';
import ErrorConsoleLogger from '../transporter/ErrorConsoleLogger';
import FileLogger from '../transporter/FileLogger';

function prettyPrint() {
	return winston.format.combine(winston.format.prettyPrint({ depth: 30 }));
}
function json() {
	return winston.format.combine(winston.format.json({ maximumDepth: 30 }));
}

const logger = winston.createLogger({
	levels: CustomLevels.levels,
	level: LEVEL.DEBUG,
	format: winston.format.combine(
		winston.format.timestamp({
			format: 'DD-MMM-YYYY HH:mm:ss',
		}),
		winston.format.prettyPrint({ colorize: true })
	),
	transports: [
		new ErrorConsoleLogger({ level: LEVEL.CRITICAL, color: CustomLevels.colors.CRITICAL }),
		new ErrorConsoleLogger({ level: LEVEL.ERROR, color: CustomLevels.colors.ERROR }),
		new ConsoleLogger({
			level: LEVEL.INFO,
			format: winston.format.combine(
				winston.format.printf((info) => {
					const { message, timestamp, label } = info;
					let logLine = '';
					if (!label) {
						logLine = `[${timestamp}]: ${message}`;
					} else {
						logLine = `[${timestamp}]: ${label}: ${message}`;
					}
					return `${CustomLevels.colors.INFO}${logLine}${CustomLevels.colors.RESET}`;
				})
			),
		}),
		new ConsoleLogger({
			level: LEVEL.DEBUG,
			format: winston.format.prettyPrint({ colorize: true }),
		}),
		new FileLogger({
			level: LEVEL.CRITICAL,
			filename: `logs/critical/${LEVEL.CRITICAL.toLowerCase()}-%DATE%.log`,
			format: prettyPrint(),
		}),
		new FileLogger({
			level: LEVEL.ERROR,
			filename: `logs/error/${LEVEL.ERROR.toLowerCase()}-%DATE%.log`,
			format: prettyPrint(),
		}),
		new FileLogger({
			level: LEVEL.HTTP,
			datePattern: 'YYYY-MM-DD',
			zippedArchive: true,
			maxSize: '20m',
			maxFiles: '1d',
			filename: `logs/http/${LEVEL.HTTP.toLowerCase()}-%DATE%.log`,
			format: prettyPrint(),
		}),
		new FileLogger({
			level: LEVEL.INFO,
			filename: `logs/info/${LEVEL.INFO.toLowerCase()}-%DATE%.log`,
			format: json(),
		}),
	],
});
export default logger;
