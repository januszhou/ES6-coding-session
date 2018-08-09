// expected print out format
// Total: x tasks
// Pending: y tasks
// Completed: z tasks
// Raw output: ...
const print = todos => {
  console.log("Total: x tasks");
  console.log("Pending: y tasks");
  console.log("Completed: z tasks");
  console.log(`Raw output: ${JSON.stringify(todos)}`);
  console.log("\n");
};

print([{ id: 1, description: "clean desk", status: "pending"}]);

export default print;
// export print as default