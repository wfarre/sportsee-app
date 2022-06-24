class Performance {
  constructor(data) {
    this._id = data.id;
    this._kind = data.kind;
    this._data = data.data;
  }

  get id() {
    return this._id;
  }

  get kind() {
    return this._kind;
  }

  get data() {
    return this._data;
  }

  get value() {
    return this._data.value;
  }

  get newData() {
    return this._data.map((item) => {
      return {
        value: item.value,
        kind: this._kind[item.kind],
      };
    });
  }

  get nature() {
    return this._kind[1];
  }
}

export default Performance;
