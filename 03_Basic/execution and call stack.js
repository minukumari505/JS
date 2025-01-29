// Javascript Execution context
// {} => global execution context (this)
// Global Execution Context
// Functional Execution Context
// Eval Execution Context

//Execution done in two phase -- 1.Memory Creation Phase
  //                               2.Execution Phase

  //example code
  let val1=10
  let val2=5
  function addNum(num1,num2){
  let total = num1+num2
  return total
  }
  let result1 = addNum(val1,val2)
  let result2 = addNum(10,2)

//   //Steps of execution of above code
//   1.Global Execution --> this
//   2. Memory Phase
//      val1 --> undefined
//      val2 --> undefined
//     addNum --> defination(function defination)
//      result1 --> undefined
//      result2 --> undefined
//    3.Execution Phase
//     val1 <-- 10
//     val2 <-- 5
//     addNum --> New Executional context=(new variable environment + Execution thread)
//                { 1.  Memory Phase
//                    val1 --> undefined
//                    val2 --> undefined
//                    total --> undefined
//                 2. Executional context
//                 num1 --> 10
//                 num2 --> 5
//                 total --> 15
//                 at last result is returned to Global Execution
//                    }    when result is returned to global these Memory and Executional context deleted
//     result1 = 15
//     addNum --> New Executional context=(new variable environment + Execution thread)
//                 { 1.  Memory Phase
//                     val1 --> undefined
//                     val2 --> undefined
//                     total --> undefined
//                  2. Executional context
//                  num1 --> 10
//                  num2 --> 2
//                  total --> 12
//                  at last result is returned to Global Execution
//                                 }    when result is returned to global these Memory and Executional context deleted
//     result2 = 12
