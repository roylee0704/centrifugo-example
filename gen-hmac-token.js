import jwt from 'jsonwebtoken';

const secretKey = 'shhhhh';
const token = jwt.sign({ foo: 'bar', subject: '' }, 'shhhhh');
console.log('secretKey', secretKey);
console.log('token', token);

const decoded = jwt.verify(token, secretKey);
console.log('decoded', decoded);