// let array: string[] 
let array: Array<string>
array = ['1', '2', '3'];

const numbers: ReadonlyArray<number> = [1,2,3];
// numbers[0] = 12; // только для чтения и нельзя изменять

// кортеж
type TypeArray = [number, string, null];
const newArray: TypeArray = [3, '3', null];