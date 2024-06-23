/*  */
class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}
/*  */
class LinkedList {
	constructor() {
		this.head = null;
	}
	/**
	 * add new head
	 * @param {any} data data to be added
	 * @returns {null}
	 */
	insertAtBeginning = (data) => {
		const newNode = new Node(data);
		this.head = newNode;
		return;
	};
	/**
	 * insert node before head / add new head
	 * @param {any} data data to be added
	 * @returns {null}
	 */
	insertBeforeHead = (data) => {
		const newNode = new Node(data);
		const currentHead = this.head;
		this.head = newNode;
		newNode.next = currentHead;
		return;
	};
	/**
	 * insert tail
	 * @param {any} data data to be added
	 * @returns {null}
	 */
	insertAtEnd = (data) => {
		if (!this.head) {
			this.insertAtBeginning(data);
			return;
		}
		let last = this.head;
		while (last.next) {
			last = last.next;
		}
		const newNode = new Node(data);
		last.next = newNode;
	};
	/**
	 * insert tail
	 * @param {any} data data to be added
	 * @param {any} insert_after value after which we add new node
	 * @returns {Boolean} indicates wether node was added or not
	 */
	insertAfterGivenValue = (data, insert_after) => {
		const newNode = new Node(data);
		let prevNode = this.head;
		while (prevNode.next) {
			if (prevNode.data == insert_after) {
				newNode.next = prevNode.next;
				prevNode.next = newNode;
				return true;
			}
			prevNode = prevNode.next;
		}
		return false;
	};
	/**
	 * insert after given node
	 * @param {Node} prevNode previous node after which we add data
	 * @param {any} data data to be added
	 */
	insertAfterNode = (prevNode, data) => {
		if (!prevNode) {
			throw new Error('Previous node can not be empty!');
		}
		const newNode = new Node(data, prevNode.next);
		prevNode.next = newNode;
	};
	/**
	 * Removes head node from list
	 * @param {null}
	 */
	removeHead = () => {
		if (!this.head) {
			throw new Error('List is empty!');
		}
		this.head = this?.head?.next;
	};
	/**
	 * Removes  tail node from list
	 * @param {null}
	 */
	removeTail = () => {
		if (!this.head) {
			throw new Error('List is empty!');
		}
		if (!this.head.next) {
			/* head is tail */
			this.head = null;
			return;
		}
		let nodeBeforeTail = this.head;
		let tail = this.head;
		while (tail.next) {
			nodeBeforeTail = tail;
			tail = tail.next;
		}
		nodeBeforeTail.next = null;
	};
	/**
	 * remove by value tail
	 * @param {any} value_to_match value of node which we remove
	 * @returns {Boolean} indicates wether node was removed or not
	 */
	removeNodeWithGivenValue = (value_to_match) => {
		if (!this.head) {
			throw new Error('List is empty!');
		}
		if (this.head.data == value_to_match) {
			/* value matched with head */
			this.head = this.head.next;
			return;
		}
		let currentNode = this.head;
		while (currentNode.next) {
			if (currentNode.next.data == value_to_match) {
				currentNode.next = currentNode.next.next;
				return true;
			}
			currentNode = currentNode.next;
		}
		return false;
	};
	/**
	 * return head of linked list
	 * @returns {Node} head node
	 */
	getHead = () => {
		return this.head;
	};
}
/**
 * search linked list for given key
 * @param {key} key key to search in linked list
 * @returns {Boolean} indicates the status of search
 */
LinkedList.prototype.search = function (key) {
	let current = this.head;
	while (current) {
		if (current.data === key) {
			return true;
		}
	}
	return false;
};
/**
 * traverses linked list and prints to console
 * @returns {null}
 */
LinkedList.prototype.traverse = function () {
	const listOfValues = [];
	let current = this.head;
	while (current) {
		listOfValues.push(current.data);
		current = current.next;
	}
	console.log(listOfValues.join(' -> '));
};

/**
 *
 * @returns {LinkedList} reversed linked list
 */
LinkedList.prototype.reverse = function () {
	if (!this.head) {
		throw new Error('List is empty!');
	}
	let reversedLinkedList = new LinkedList();
	let current = this.head;
	while (current) {
		reversedLinkedList.insertBeforeHead(current.data);
		current = current.next;
	}
	return reversedLinkedList;
};
