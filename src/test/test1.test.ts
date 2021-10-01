import {User} from "../model/User";


describe("User class test", () => {
    it("test 1", ()=> {
        const myUser = new User("fred", "fla")
        expect(myUser.firstName == "fred").toBe(true)
    })
})

