import { randomBytes } from 'crypto';

const main = async () => {
const generate32ByteValue = () => {
  return randomBytes(32).toString('hex');
};
console.log(generate32ByteValue());
}
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
