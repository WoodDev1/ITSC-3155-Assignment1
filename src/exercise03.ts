export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {

const sum = inventory.reduce((dollarSum, [itemName,quantity,pricePerUnit]) => {
  if (quantity > 5)
  {
    return dollarSum += (pricePerUnit*quantity);
  }
  else return dollarSum; 
},0);

  return sum;
}
