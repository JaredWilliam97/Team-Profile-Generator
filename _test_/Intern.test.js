const { expect, it } = require("@jest/globals");
const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name, an id, and an email", () => {
      const employee = new Intern("Jared", 123456, "sutch002@yahoo.com");

      expect(employee.name).toEqual("Jared");
      expect(employee.id).toEqual(123456);
      expect(employee.email).toEqual("sutch002@yahoo.com");
    });

    it("should throw an error if no arguments are provided", () => {
      const cb = () => new Intern();

      expect(cb).toThrow();
    });

    it("should throw an error if only provided with 1 argument", () => {
      const cb = () => new Intern("Jared");
      const err = new Error("Expected parameter of 'id' and 'email'");

      expect(cb).toThrowError(err);
    });
    it("should throw an error if only provided with 2 argument", () => {
      const cb = () => new Intern("Jared", 123456);
      const err = new Error("Expected parameter of 'email'");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if the 'name' is not provided as a string", () => {
      const cb = () => new Intern(123456, 123456, "sutch002@yahoo.com");
      const err = new Error("Expected parameter of 'name' to be a string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if the 'id' is not provided as a number", () => {
      const cb = () => new Intern("Jared", "Chip", "sutch002@yahoo.com");
      const err = new Error("Expected parameter of 'id' to be a number");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if the 'email' is not provided with an @ and '.'", () => {
      const cb = () => new Intern("Jared", "Chip", "sutch002@yahoo");
      const err = new Error(
        "Expected parameter of 'email' to contain a @ and '.'"
      );

      expect(cb).toThrowError(err);
    });
  });
});
