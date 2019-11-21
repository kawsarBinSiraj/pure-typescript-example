
export {};

// typescript.ts:4:5 - error TS2451: Cannot @redeclare block-scoped variable
let message = 'Message';

// variables declare
const name:string = 'kawsar ibn siraj';
const integer:number = 1200;
const isBool:boolean = false;
const fullName:string = `hi, this is ${name}`;
const n:null = null;
const u:undefined = undefined;
const numberOfArray:number[] = [1,2,3,4,5];
const numberOfArray2:Array<number> = [10,20,30,40,50];

// you should must use one @number and then one @object by recycle other you will get errors
const arrayNumberObj:[number, object] = [1,{key : 'value'}];
// you should must use one @string and then one @object by recycle other you will get errors
const arrayStringObj:[string, object] = ['string', {}];

// create custom types @enum
enum Color {red, green , blue}
enum Color2 {yellow = 10, pink , black}
let color : Color = Color.red
let color2 : Color2 = Color2.black

// randomValue by any keyword
let randomValue : any = 'random';
randomValue = 2000;

// unknown
let unknown : unknown = 'unknown';
(unknown as string).toUpperCase();


// get param must number
// return must number thats type of number
function hasNumber(number: number) :  number {
    if ( typeof number ) {
        return number;
    }
}

if (hasNumber(integer)) {
    console.log('its perfect function');
} else {
    console.log('OOPS......');
}






