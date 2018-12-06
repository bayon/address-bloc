const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {
    describe("#getContactCount()", () => {
        beforeEach(() => {
            this.menu = new MenuController();
        })
 // #2
        it("should return 1 when there is exactly one contact in the book", () => {
            //const menu = new MenuController();
            this.menu.contacts.push("Bob");
            expect(this.menu.getContactCount()).toBe(1)
        });
    });
  });