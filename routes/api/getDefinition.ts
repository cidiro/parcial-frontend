import { Handlers } from "$fresh/server.ts";
import axios from "npm:axios";

type DefinitionData = {
    definition: string;
    example?: string;
}

type WordData = {
    definitions: Array<DefinitionData>;
}

type RequestData = {
    meanings: Array<WordData>;
}


export const handler: Handlers = {
    POST: async (req: Request) => {
        try {
            const body = await req.json();
            const { word } = body;
            
            const url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/" + word;
            const response = await axios.get<Array<RequestData>>(url);
            if (response.data.length === 0) {
                return new Response("Word not found", { status: 404 });
            }
            return new Response(JSON.stringify(response.data), {
                headers: { "Content-Type": "application/json" },
            });
        } catch(e) {
            console.error(e);
            return new Response("Error", { status: 500 });
        }
    },
};