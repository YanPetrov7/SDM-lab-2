"use strict";

const isChar = (elem) => {
  if (typeof elem !== "string" || elem.length !== 1) {
    return `Error: type of '${elem}' is not equal char`;
  }
};

const isValidIndex = (index, length) => {
  if (typeof index !== "number") {
    return `Error: type of '${index}' is not equal number`;
  }
  if (index < 0 || index > length) {
    return `Error: there is no element in array with index: ${index}`;
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
    if (isChar(elem)) {
      console.log(`append: ${isChar(elem)}`);
      return;
    }
    this.list.push(elem);
  }
  insert(elem, index) {
    if (isChar(elem)) {
      console.log(`insert: ${isChar(elem)}`);
      return;
    }
    if (isValidIndex(index, this.size())) {
      console.log(`insert: ${isValidIndex(index, this.size())}`);
      return;
    }
    this.list.splice(index, 0, elem);
  }
  delete(index) {
    if (isValidIndex(index, this.size())) {
      console.log(`delete: ${isValidIndex(index, this.size())}`);
      return;
    }
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
    if (isValidIndex(index, this.size())) {
      console.log(`get: ${isValidIndex(index, this.size())}`);
      return;
    }
    return this.list[index];
  }
  clone() {
    const clonedList = [...this.list];
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
