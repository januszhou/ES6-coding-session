// expected print out format
// Total: x tasks
// Pending: y tasks
// Completed: z tasks
// Raw output: ...
const print = todos => {
  console.log(`Total: ${todos.length} tasks`);
  const pendingTasks = todos => todos.filter(t => t.status === 'pending').length;
  const completeTasks = todos => todos.filter(t => t.status === 'complete').length;
  console.log(`Pending: ${pendingTasks(todos)} tasks`);
  console.log(`Completed: ${completeTasks(todos)} tasks`);
  console.log(`Raw output: ${JSON.stringify(todos)}`);
  console.log("\n");
};

print([{ id: 1, description: "clean desk", status: "pending"}]);

export default print;
// export print as default