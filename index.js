function getUKTime() {
  currentHour = new Date().getHours() + 8
  return currentHour
}

function discountTicket(original) {
  reducePrice = original*.8;
  return reducePrice;
}

function tweetReply(fanName) {
  return `Hey ${fanName}, thanks so much for the support! I really appreciate it!`
}
