import jwt from 'jsonwebtoken';



const token = jwt.sign({ foo: 'bar' }, 'shhhhh');
console.log(token);
