import DailyRotateFile from 'winston-daily-rotate-file';

export default class FileLogger extends DailyRotateFile {
	constructor(options: DailyRotateFile.DailyRotateFileTransportOptions) {
		super({
			datePattern: 'YYYY-MM',
			zippedArchive: true,
			maxSize: '20m',
			maxFiles: '30d',
			...options,
		});
		this.level = options.level as string;
	}

	log(info: any, callback: () => void) {
		if (info.level === this.level && super.log) {
			super.log(info, callback);
		} else {
			callback();
		}
	}
}
