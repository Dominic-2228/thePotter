const arr = []

export const toSellOrNotToSell = (potteryObj) => {
  if(potteryObj.weight >= 6){
    potteryObj.price = 40
  }
  else if(potteryObj.weight < 6) {
    potteryObj.price = 20
  }
  else if(potteryObj.cracked === true){
    return "Not avalable for sell"
  }
  else if(potteryObj.cracked === false){
    arr.push(potteryObj)
  }
  else{
    return "invalid object"
  }
  return potteryObj
}

export const usePottery = () => {
    arr.map()
}