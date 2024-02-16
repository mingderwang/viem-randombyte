import { randomBytes } from 'crypto';
import { generatePrivateKey, privateKeyToAccount, signMessage } from "viem/accounts"

const main = async () => {
const generate32ByteValue = () => {
  return randomBytes(32).toString('hex');
};
console.log('0x'+generate32ByteValue());
console.log(generatePrivateKey());
}
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
