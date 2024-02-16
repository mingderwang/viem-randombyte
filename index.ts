import { generatePrivateKey, privateKeyToAccount, signMessage } from "viem/accounts"
import { writeFileSync } from "fs-extra"
import { createWalletClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const main = async () => {
  const privateKey =
        (process.env.PRIVATE_KEY as Hex) ??
        (() => {
                const pk = generatePrivateKey()
                writeFileSync(".envrc", `export PRIVATE_KEY=${pk}`)
                return pk
        })()

  console.log(privateKey)
  const account = privateKeyToAccount(privateKey)
  console.log(account)

  const client = createWalletClient({
  account,
  chain: mainnet,
  transport: http()
})
}
  
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
