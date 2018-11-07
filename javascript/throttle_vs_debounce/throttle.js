/*
 You go to a bar and the barman has a policy of only allowing you to order a drink every 45 minutes (Or things get crazy). You order a drink in the first minute and they hand one over. You then try and order one every minute after. The barman denies you until the 45th minute when the then tired barman hands over the next drink. You won’t get another drink for another 45 minutes

The delay is the rate at which the function will invoke

ie stopping click spamming, resize handler, scroll handler
*/

function makeApiCall() {
  console.log('make api call')
}

const throttle = (func, limit) => {
  let isInThrottle
  return function() {
    context = this
    args = arguments
    if (!isInThrottle) {
      isInThrottle = true
      func.apply(context, args)
      setTimeout(function() {
        isInThrottle = false;
      }, limit);
    }
  }
}

/* requires <div id='button'><span>CLICK</span></div> */
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('button').addEventListener('click', throttle(makeApiCall, 1000))
})
