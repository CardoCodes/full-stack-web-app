import type { RequestHandler} from "@sveltejs/kit";
import { api } from "./_api";


export const get: RequestHandler = (request) => {
    return api(request);
}

export const post: RequestHandler<{}, FormData> = (request) =>{
    return api(request, {
        uid: `${Date.now()}`, //TODO: replace with uid from database, 2 request at real time causes bug
        created_at: new Date(),
        text: request.body.get("text"),
        done: false
    });
}