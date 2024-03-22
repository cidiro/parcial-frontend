import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { SearchBar } from "../islands/SearchBar.tsx"
import axios from "npm:axios";
import Menu from "../components/Menu.tsx";
import DefinitionList from "../components/DefinitionList.tsx"

type DefinitionData = {
  definition: string;
  example?: string;
}

type WordData = {
  definitions: Array<DefinitionData>;
}

type RequestData = {
  word: string;
  meanings: Array<WordData>;
}

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext<unknown, Array<RequestData>>) => {
    try {
      const params = await req.formData();
      const { word } = Object.fromEntries(params);

      const url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/" + word;
      const response = await axios.get<Array<RequestData>>(url);
      if (response.data.length === 0) {
          return new Response("Word not found", { status: 404 });
      }

      return ctx.render(response.data);
    } catch(e) {
      console.error(e);
      return new Response("Error", { status: 500 });
    }
  },
};


const Page = (props: PageProps<Array<RequestData>>) => {
  const data = props.data? ({
    word: props.data[0].word,
    definitions: props.data[0].meanings.flatMap((meaning) => (
      meaning.definitions
    )).map((def) => (
      {
        definition: def.definition,
        example: def.example ? def.example : undefined
      }
    ))
  }) : null;
  return (
    <div class="">
      <Menu selected="Client"/>
      <h1>My Dictionary</h1>
      <SearchBar/>
      {!!data && <DefinitionList wordData={data}/>}
    </div>
  );
}

export default Page;