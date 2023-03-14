"use strict";

const isChar = (elem) => {
  if (typeof elem !== "string" || elem.length !== 1) {
    return false;
  }
};

const isValidIndex = (index, length) => {
  if (
    typeof index !== "number" ||
    index < 0 ||
    (index >= length && index !== 0)
  ) {
    throw new Error("Invalid index");
  }
};

class List {
  constructor() {
    this.list = [];
  }
  size() {
    return this.list.length;
  }
  append(elem) {
    if (isChar(elem) === false) return;
    this.list.push(elem);
  }
  insert(elem, index) {
    if (isChar(elem) === false) return;
    isValidIndex(index, this.size());
    this.list.splice(index, 0, elem);
  }
  delete(index) {
    isValidIndex(index, this.size());
    const elem = this.list[index];
    this.list.splice(index, 1);
    return elem;
  }
  deleteAll(elem) {
    for (let index = 0; index <= this.list.length; index++) {
      if (this.list[index] === elem) {
        this.list.splice(index, 1);
        index--;
      }
    }
  }
  get(index) {
    isValidIndex(index, this.size());
    return this.list[index];
  }
  clone() {
    const clonedList = new List();
    for (const elem of this.list) {
      clonedList.append(elem);
    }
    return clonedList;
  }
  reverse() {
    this.list.reverse();
  }
  findFirst(elem) {
    for (let i = 0; i < this.size(); i++) {
      if (this.list[i] === elem) {
        return i;
      }
    }
    return -1;
  }
  findLast(elem) {
    for (let i = this.size() - 1; i >= 0; i--) {
      if (this.list[i] === elem) {
        return i;
      }
    }
    return -1;
  }
  clear() {
    this.list.length = 0;
  }
  extend(elems) {
    for (const elem of elems) {
      if (isChar(elem)) {
        console.log(`extend: ${isChar(elem)}`);
        return;
      }
    }
    this.list = this.list.concat(elems);
  }
}

