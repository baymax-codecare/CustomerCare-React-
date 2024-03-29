export default class Error {
	constructor(error = {}) {
		const { errorCode = 'ERROR', message = "An unknown error has encountered." } = error;
		this.image = './images/warning.png';
		this.code = errorCode;
		this.message = message;
	}
}
