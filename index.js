const sum = (a, b) => a + b;
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4};

console.log(a, b, rest);
console.log(sum(1,2));

// todo list
// after addTask, each task is pending status
// after completeTask, task is complete status
// const list = [];
//
// const addTask = ({ id, description }) => {
//   //...
// };
//
// const removeTask = ({ id }) => {
//   // ...
// };
//
// const completeTask = ({ id }) => {
//   // ...
// };
//
// addTask({ id: 1, description: "clean desk"}); //list = [{ id: 1, description: "clean desk", status: "pending"}];
// addTask({ id: 2, description: "commit code"});
// addTask({ id: 3, description: "send email"});
//
// print(list);
//
// completeTask({ id: 2 });
//
// print(list);
//
// removeTask({ id: 3});
//
// print(list);
