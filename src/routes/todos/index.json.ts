import type { RequestHandler} from "@sveltejs/kit";

//TODO: persist in database
let todos: Todo[] = [];

export const get: RequestHandler = () => {
    return{
        status: 200,
        body: "Hello from the API."
    }
}

export const post: RequestHandler<{}, FormData> = (request) =>{
    //Add todo text to array
    todos.push(
        {
            created_at: new Date(),
            text: request.body.get("text"),
            done: false
        }
    );

    return{
        status: 303,
        headers: {
            location: "/"
        }
    }
}