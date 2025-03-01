import { Message } from "./hello";

describe("This is Hello World",()=>{
    let expected="";
    beforeEach(()=>{
         expected="Hello World";
    });
    afterEach(()=>{
        expected=""
    })
    it('Prints hello World',()=>{
        expect(Message()).toEqual("Hello World!!!!")
    })
    it('contains matching word',()=>{
        expect(Message()).toContain("World")
    })
})