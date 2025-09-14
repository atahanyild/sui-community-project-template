import { Transaction } from "@mysten/sui/transactions";

export const buyHero = (packageId: string, listHeroId: string, priceInSui: string) => {
  const tx = new Transaction();

  const priceInMist:number = parseFloat(priceInSui) * 1e9;

  const [paymentCoin] = tx.splitCoins(tx.gas, [priceInMist]);
  
  tx.moveCall({
    target: `${packageId}::hero::buy_hero`,
    arguments: [
      tx.object(listHeroId),
      paymentCoin
    ]
  })

  return tx;
};
