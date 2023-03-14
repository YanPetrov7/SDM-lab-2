const List = require("./main.js");

describe("method size:", () => {
  let example;

  beforeEach(() => {
    example = new List();
  });

  test("size method should return 0 for empty list", () => {
    expect(example.size()).toBe(0);
  });

  test("size method should return count of elements", () => {
    example.append("a");
    example.append("b");
    example.append("c");
    example.append("d");

    expect(example.size()).toBe(4);
  });
});

describe("method append:", () => {
  let example;

  beforeEach(() => {
    example = new List();
  });

  test("append method should add element to an empty list", () => {
    example.append("a");

    expect(example.get(0)).toBe("a");
    expect(example.size()).toBe(1);
  });

  test("append method should add element to an non-empty list", () => {
    example.append("a");
    example.append("b");

    expect(example.get(0)).toBe("a");
    expect(example.get(1)).toBe("b");
    expect(example.size()).toBe(2);
  });

  test("append method shouldn't add element with invalid type", () => {
    example.append("abc");
    example.append(1);
    example.append(true);
    example.append(null);
    example.append(undefined);
    example.append(Symbol());

    expect(example.size()).toBe(0);
  });
});

describe("method insert:", () => {
  let example;

  beforeEach(() => {
    example = new List();
  });

  test("insert method should insert element to an empty list", () => {
    example.insert("a", 0);
    expect(example.get(0)).toBe("a");
    expect(example.size()).toBe(1);
  });

  test("insert method should insert element to an non-empty list", () => {
    example.append("a");
    example.append("b");
    example.append("c");
    example.insert("d", 1);
    expect(example.get(1)).toBe("d");
    expect(example.size()).toBe(4);
  });

  test("insert method shouldn't insert element with invalid type", () => {
    example.insert("abc", 0);
    example.insert(1, 0);
    example.insert(true, 0);
    example.insert(null, 0);
    example.insert(undefined, 0);
    example.insert(Symbol(), 0);

    expect(example.get(0)).toBe(undefined);
    expect(example.size()).toBe(0);
  });

  test("insert method should throw error for element with invalid index", () => {
    expect(() => example.insert("a", -1)).toThrow("Invalid index");
    expect(() => example.insert("b", 10)).toThrow("Invalid index");
    expect(() => example.insert("a", "abc")).toThrow("Invalid index");
    expect(() => example.insert("b", true)).toThrow("Invalid index");
    expect(() => example.insert("c", null)).toThrow("Invalid index");
    expect(() => example.insert("d", Symbol())).toThrow("Invalid index");
  });
});

describe("method delete:", () => {
  let example;

  beforeEach(() => {
    example = new List();
    example.append("a");
    example.append("b");
    example.append("c");
  });

  test("delete method should delete element", () => {
    example.delete(1);
    expect(example.get(0)).toBe("a");
    expect(example.get(1)).toBe("c");
    expect(example.size()).toBe(2);
  });

  test("delete method should return deleted element", () => {
    expect(example.delete(0)).toBe("a");
    expect(example.delete(0)).toBe("b");
    expect(example.delete(0)).toBe("c");
  });

  test("delete method should throw error for element with invalid index", () => {
    expect(() => example.delete(-1)).toThrow("Invalid index");
    expect(() => example.delete(3)).toThrow("Invalid index");
    expect(() => example.delete("abc")).toThrow("Invalid index");
    expect(() => example.delete(true)).toThrow("Invalid index");
    expect(() => example.delete(null)).toThrow("Invalid index");
    expect(() => example.delete(Symbol())).toThrow("Invalid index");
  });
});

describe("method deleteAll:", () => {
  let example;

  beforeEach(() => {
    example = new List();
  });

  test("deleteAll method should delete elements with same value", () => {
    example.append("a");
    example.append("b");
    example.append("a");
    example.append("c");
    example.append("a");

    example.deleteAll("a");

    expect(example.size()).toBe(2);
    expect(example.get(0)).toBe("b");
    expect(example.get(1)).toBe("c");
  });

  test("deleteAll method should do nothing if list is empty", () => {
    example.deleteAll("d");

    expect(example.get(0)).toBe(undefined);
    expect(example.size()).toBe(0);
  });

  test("deleteAll method shouldn't delete elements with wrong value", () => {
    example.append("a");
    example.append("b");

    example.deleteAll("d");
    expect(example.size()).toBe(2);
  });
});

describe("method get:", () => {
  let example;

  beforeEach(() => {
    example = new List();
    example.append("a");
    example.append("b");
    example.append("c");
  });

  test("get method should return element by index", () => {
    expect(example.get(0)).toBe("a");
    expect(example.get(1)).toBe("b");
    expect(example.get(2)).toBe("c");
  });

  test("get method should throw error for element with invalid index", () => {
    expect(() => example.get(-1)).toThrow("Invalid index");
    expect(() => example.get(3)).toThrow("Invalid index");
    expect(() => example.get("abc")).toThrow("Invalid index");
    expect(() => example.get(true)).toThrow("Invalid index");
    expect(() => example.get(null)).toThrow("Invalid index");
    expect(() => example.get(undefined)).toThrow("Invalid index");
    expect(() => example.get(Symbol())).toThrow("Invalid index");
  });
});

describe("method clone:", () => {
  test("clone method should return empty list if original was empty", () => {
    const example = new List();
    const clonedExample = example.clone();

    expect(clonedExample.size()).toBe(0);
  });

  test("clone method should return cloned list", () => {
    const example = new List();

    example.append("a");
    example.append("b");
    example.append("c");

    const clonedExample = example.clone();

    expect(clonedExample.get(0)).toBe("a");
    expect(clonedExample.get(1)).toBe("b");
    expect(clonedExample.get(2)).toBe("c");

    expect(clonedExample.size()).toBe(3);
  });

  test("clone method should return independent list", () => {
    const example = new List();
    const clonedExample = example.clone();

    example.append("a");
    example.append("b");
    example.append("c");
    clonedExample.append("d");
    clonedExample.append("e");

    expect(clonedExample.get(0)).toBe("d");
    expect(clonedExample.get(1)).toBe("e");
    expect(clonedExample.size()).toBe(2);
  });
});

describe("method reverse:", () => {
  test("reverse method shouldn't change empty list", () => {
    const example = new List();
    example.reverse();

    expect(example.size()).toBe(0);
  });

  test("reverse method should reverse list", () => {
    const example = new List();

    example.append("a");
    example.append("b");
    example.append("c");
    example.append("d");
    example.reverse();

    expect(example.get(0)).toBe("d");
    expect(example.get(1)).toBe("c");
    expect(example.get(2)).toBe("b");
    expect(example.get(3)).toBe("a");

    expect(example.size()).toBe(4);
  });
});

describe("method findFirst:", () => {
  let example;

  beforeEach(() => {
    example = new List();
    example.append("a");
    example.append("b");
    example.append("c");
  });

  test("findFirst method should return nothing if there is no element in list", () => {
    expect(example.findFirst("d")).toBe(-1);
    expect(example.findFirst("e")).toBe(-1);
    expect(example.findFirst("f")).toBe(-1);
    expect(example.findFirst("g")).toBe(-1);
  });

  test("findFirst method should return first element with same value in list", () => {
    example.append("c");
    example.append("b");
    example.append("a");

    expect(example.findFirst("a")).toBe(0);
    expect(example.findFirst("b")).toBe(1);
    expect(example.findFirst("c")).toBe(2);
  });
});

describe("method findLast:", () => {
  let example;

  beforeEach(() => {
    example = new List();
    example.append("a");
    example.append("b");
    example.append("c");
  });

  test("findLast method should return nothing if there is no element in list", () => {
    expect(example.findLast("d")).toBe(-1);
    expect(example.findLast("e")).toBe(-1);
    expect(example.findLast("f")).toBe(-1);
    expect(example.findLast("g")).toBe(-1);
  });

  test("findLast method should return last element with same value in list", () => {
    example.append("c");
    example.append("b");
    example.append("a");

    expect(example.findLast("a")).toBe(5);
    expect(example.findLast("b")).toBe(4);
    expect(example.findLast("c")).toBe(3);
  });
});

describe("method clear:", () => {
  let example;

  beforeEach(() => {
    example = new List();
  });

  test("clear method should return empty list even if it's already empty", () => {
    example.clear();

    expect(example.size()).toBe(0);
  });

  test("clear method should clean all elements from list", () => {
    example.append("a");
    example.append("b");
    example.append("c");
    example.clear();

    expect(example.size()).toBe(0);
  });
});

describe("method extend:", () => {

  test("extend method should do nothing to list if it extends empty list", () => {
    const example1 = new List();
    example1.append("a");
    example1.append("b");
    example1.append("c");
    const example2 = new List();

    example1.extend(example2)

    expect(example1.size()).toBe(3);
    expect(example1.get(0)).toBe("a");
    expect(example1.get(1)).toBe("b");
    expect(example1.get(2)).toBe("c");
  });

  test("extend method should concat two lists", () => {
    const example1 = new List();
    example1.append("a");
    example1.append("b");
    example1.append("c");
    const example2 = new List();
    example1.append("d");
    example1.append("e");
    example1.append("f");

    example1.extend(example2)

    expect(example1.size()).toBe(6);
    expect(example1.get(0)).toBe("a");
    expect(example1.get(1)).toBe("b");
    expect(example1.get(2)).toBe("c");
    expect(example1.get(3)).toBe("d");
    expect(example1.get(4)).toBe("e");
    expect(example1.get(5)).toBe("f");
  });

  test("extend method should leave list independent", () => {
    const example1 = new List();

    example1.append("a");
    example1.append("b");
    example1.append("c");

    const example2 = new List();

    example1.append("d");
    example1.append("e");
    example1.append("f");

    example1.extend(example2)

    example2.append("g");
    example2.append("h");
    example2.append("i");

    expect(example1.size()).toBe(6);
    expect(example1.get(0)).toBe("a");
    expect(example1.get(1)).toBe("b");
    expect(example1.get(2)).toBe("c");
    expect(example1.get(3)).toBe("d");
    expect(example1.get(4)).toBe("e");
    expect(example1.get(5)).toBe("f");
  });
});