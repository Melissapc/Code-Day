document.getElementById('text_input').addEventListener('keypress',function(event){
    if (event.which!=13) {
        // if enter key isnt pressed then dont do the following code
        return;
    var todo_task = document.createElement('li');
    //var = varible
    
    
    todo_task.textContext=document.getElementById('text_input').value;
   
   document.getElementById('list').appendChild(todo_task);
});