const theInput = document.querySelector('input');
const theAddButton = document.querySelector(".plus");
const tasksContainer = document.querySelector('.tasks-content');
const tasksCount = document.querySelector('.task-count span');
const tasksCompleted = document.querySelector('.task-completed span');


// focus on input field
window.onload = function() {
  theInput.focus();
};

// adding the task
theAddButton.addEventListener("click", function() {
  // if input is empty
  if(theInput.value === '') {

  } else {
    const noTasksMsg = document.querySelector('.no-tasks-message');
    if(document.body.contains(noTasksMsg)) {
      // remove no task smessage
      noTasksMsg.remove();
    }
    // create main span
    const mainSpan = document.createElement('span');
    // create the span delete
    const deleteSpan = document.createElement('span');
    // create the main span text
    const mainSpanText = document.createTextNode(theInput.value);
    // create the delete span text
    const deleteSpanText = document.createTextNode('Delete');
    // add text to main span
    mainSpan.appendChild(mainSpanText);
    // add class to main span
    mainSpan.className = "task-box";
    // add text to delete span
    deleteSpan.appendChild(deleteSpanText);
    // add class to delete span
    deleteSpan.className = "delete";
    // add delete span to main span
    mainSpan.appendChild(deleteSpan);
    // add main span to task content
    tasksContainer.appendChild(mainSpan);
    // remove input value
    theInput.value = '';
    // add focus on input field
    theInput.focus();
  }
});


document.addEventListener('click', function(e) {
  // delete task
  if(e.target.className == 'delete') {
    e.target.parentNode.remove();
    if(tasksContainer.childElementCount == 0) {
      createNoTasksMsg();
    }
  }
  // finish task
  if(e.target.classList.contains('task-box')) {
    e.target.classList.toggle('finished');
  }

  tasksCalculaltor();

});

// create no tasks message

function createNoTasksMsg() {
  // create message span element
  const msgSpan = document.createElement('span');
  // create text message
  const msgTextSpan = document.createTextNode("No Tasks To Show");
  // add text message to span
  msgSpan.appendChild(msgTextSpan);
  // add class to message span
  msgSpan.className = 'no-tasks-message';
  // add created message span element to tasks Content
  tasksContainer.appendChild(msgSpan);
}


function tasksCalculaltor() {
  // calculate all tasks
  tasksCount.textContent = document.querySelectorAll('.task-box').length;
  // calculate completed tasks
  tasksCompleted.textContent = document.querySelectorAll('.finished').length;
}