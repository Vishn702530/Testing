
//capitalize
const Capitalize=require('./capital')
test('hello returns Hello', ()=>{
    expect(Capitalize('hello')).toBe('Hello');
});


//reverse
const reverseString=require('./reverse')
test('welcome returns emoclew',()=>{
    expect(reverseString('welcome')).toBe('emoclew');
});

//calculator
const Calculator=require('./calculator')
test('return answrrs',()=>{
    expect(Calculator.add(5,7)).toBe(12);
    expect(Calculator.subtract(8,2)).toBe(6);
    expect(Calculator.multiply(3,4)).toBe(12);
    expect(Calculator.divide(9,3)).toBe(3);
});

//caesar
const caesarCipher=require('./caesar')
test("return cipher text", () => {
    expect(caesarCipher("abcde", 2)).toBe("cdefg");
  });

//analyze
const analyzeArray=require('./analyze')
test('return resultss',()=>{
    expect(analyzeArray([1,8,3,4,8,6])).toEqual({
        average:5,
        min:1,
        max:8,
        length:6
    });
});