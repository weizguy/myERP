const DEFAULT_PROPERTIES = {
  get createDate() {
    return new Date()
  }
}

class Item {
  constructor({ itemNumber, itemName, createDate } = {}) {
    this.itemNumber = itemNumber;
    this.itemName = itemName;
    this.createDate = createDate || DEFAULT_PROPERTIES.createDate;
  }
}

module.exports = Item;