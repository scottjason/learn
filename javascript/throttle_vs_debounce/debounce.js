/*
You decided to take your child to Disneyland. As you’re driving, they’re so excited they just incessantly ask, “are we there yet?!” When you finally pull up to the park, your child, amazed, falls silent, looking out the window in shock. After a deep breath, you calmly reply “We’re there.”

Once the delay time has elapsed w.out the function being invoked (ie resetting the timeout), it will fire the last invocation
ie autocomplete
*/

function makeApiCall() {
  console.log('make api call')
}

const debounce = (func, delay) => {
  let inDebounce
  return function() {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}

/* requires <div id='button'><span>CLICK</span></div> */
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('button').addEventListener('click', debounce(makeApiCall, 300))
})
