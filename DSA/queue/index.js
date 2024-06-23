module.exports.Queue = class {
	constructor() {
		this.queue = [];
	}
	/**
	 * adds values to top of queue
	 * @param {any} value value to  add to queue
	 * @returns {null}
	 */
	enqueue = (value) => {
		this.queue.push(value);
	};
	/**
	 * removes bottom most value of queue
	 * @returns {null}
	 */
	dequeue = () => {
		if (this.isEmpty()) {
			throw new Error('Queue is empty!');
		}
		this.queue.shift();
	};
	/**
	 * return bottom most value of queue
	 * @returns {} value on bottom (first) of queue
	 */
	peak = () => {
		if (this.isEmpty()) {
			throw new Error('Queue is empty!');
		}
		return this.queue[0];
	};
	/**
	 * return boolean that indicates if queue is empty or not
	 * @returns {Boolean} if queue is empty or not
	 */
	isEmpty = () => {
		return this.queue.length === 0;
	};
	/**
	 * removes all elements of queue
	 * @returns {null}
	 */
	clear = () => {
		this.queue = [];
	};
	/**
	 * print queue in string format
	 * @returns {String} queue values in string format
	 */
	print = () => {
		return this.queue.join('\n');
	};
};
