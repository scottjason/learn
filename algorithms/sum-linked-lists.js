/**
*
* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
* You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*
* Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
* Output: 7 -> 0 -> 8
*
* https://leetcode.com/problems/add-two-numbers/description/
*
**/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
 }

const addTwoNumbers = (l1, l2) => {
  let carry = 0
  let stack = []
  const recurse = (node1, node2, currentNode) => {
      let sum = 0
      if (node1 !== null) {
          sum += node1.val
      }
      if (node2 !== null) {
          sum += node2.val
      }
      if ((sum  + carry) > 9) {
          sum = (sum + carry) - 10
          carry = 1
      } else if (sum > 0)  {
          sum = sum + carry
          carry = null
      } else {
          sum = carry
          carry = null
      }
      
      let newNode = new ListNode(sum)
      if (!currentNode) {
          currentNode = newNode
      } else {
          let head = currentNode
          currentNode = newNode
          currentNode.next = head
      }
      stack.push(newNode)
      if (carry !== null || (node1 !== null && node1.next) || (node2 !== null && node2.next)) {
          let newNode1 = node1 && node1.next
          let newNode2 = node2 && node2.next
          return recurse(newNode1, newNode2, currentNode)
      }
      else {
        return stack
      }
  }
  return reverse(recurse(l1, l2, null))
};


function reverse(stack) {
  let output
  function recurse(output) {
    if (!stack.length) { return output; }
    if (!output) {
      output = stack.pop()
      output.next = null
      return recurse(output)
    } else {
      let tmp = output
      output = stack.pop()
      output.next = tmp
      return recurse(output)
    }
  }
  return recurse(output)
}
