import print from './print';

// todo list
// after addTask, each task is pending status
// after completeTask, task is complete status
let list = [];

// status is optional, try it with default parameter
// concat vs push
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
const addTask = ({ id, description, status = 'pending' }) => {
  return list.concat([{ id, description, status }]);
};

//
const removeTask = ({ id }) => {
  const updatedList = [];
  for(let i = 0; i <= list.length - 1; i++){
    const { id: listId } = list[i];
    if(listId !== id){
      updatedList.push(list[i]);
    }
  }
  return updatedList;
};

const completeTask = ({ id }) => {
  const updatedList = [];
  for(let i = 0; i <= list.length - 1; i++){
    const { id: listId } = list[i];
    if(listId === id){
      list[i].status = 'complete';
      updatedList.push(list[i]);
    } else {
      updatedList.push(list[i]);
    }
  }
  return updatedList;
};

list = addTask({ id: 1, description: "clean desk" }); //list = [{ id: 1, description: "clean desk", status: "pending"}];
list = addTask({ id: 2, description: "commit code", status: "waitForTomorrow" });
list = addTask({ id: 3, description: "send email" });

print(list);

list = completeTask({ id: 2 });

print(list);

list = removeTask({ id: 3 });

print(list);
