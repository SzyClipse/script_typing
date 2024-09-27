import axios from "axios"

const url = "https://jsonplaceholder.typicode.com/todos/1"

interface Todo {
   id: number
   title: string
   completed: boolean
}

axios.get(url).then(response => {
   console.log("First entry from given API is:")

   const todo = response.data as Todo;

   const id = todo.id;
   const title = todo.title;
   const completed = todo.completed;

   logging(id, title, completed)
})

const logging = (id: number, title: string, completed: boolean) => {
   console.log (`
      ID        = ${id}
      Title     = ${title}
      Completed = ${completed}
   `)
}
