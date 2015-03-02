import Type from './type';

export default class NumberType extends Type {
	constructor(options) {
		super(options);
	}

	_serialize(value) {
		return Number(value);
	}

	_deserialize(value) {
		return value;
	}

	static get dbType() {
		return 'Double';
	}
}