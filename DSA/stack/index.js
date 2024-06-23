module.exports.Stack = class  {
	constructor() {
		this.stack = [];
	}
	/**
	 * adds values to top of stack
	 * @param {any} value value to  add to stack
	 * @returns {null}
	 */
	push = (value) => {
		this.stack.push(value);
	};
	/**
	 * removes top most value of stack
	 * @returns {null}
	 */
	pop = () => {
		this.stack.pop();
	};
	/**
	 * return top most value of stack
	 * @returns {} value on top (last) of stack
	 */
	peak = () => {
		return this.stack[this.stack.length - 1];
	};
	/**
	 * return boolean that indicates if stack is empty or not
	 * @returns {Boolean} if stack is empty or not
	 */
	isEmpty = () => {
		return this.stack.length === 0;
	};
	/**
	 * return size of stack
	 * @returns {Number} size of stack
	 */
	size = () => {
		return this.stack.length;
	};
	/**
	 * removes all elements of stack
	 * @returns {Number} size of stack
	 */
	clearStack = () => {
		this.stack = [];
	};
	/**
	 * return boolean that indicates if stack contains given value
	 * @param {any} value value to be searched in stack
	 * @returns {Boolean} stack contains given value
	 */
	contains = (value) => {
		return this.stack.includes(value);
	};
	/**
	 * print stack in string format
	 * @returns {String} stack values in string format
	 */
	printStack = () => {
		return this.stack.join('\n');
	};
}