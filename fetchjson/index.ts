import axios from "axios"

const url = "https://jsonplaceholder.typicode.com/todos/1"

interface Todo {
   id: number
   title: string
   completed: boolean
}

axios.get(url).then(response => {
   console.log("First entry from given API is:")
   console.log(response.data)
})
