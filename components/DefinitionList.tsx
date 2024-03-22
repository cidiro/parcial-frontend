import { FunctionComponent } from "preact";

type Definition = {
  definition: string;
  example?: string;
};

type WordData = {
  word: string;
  definitions: Array<Definition>;
};

const DefinitionList: FunctionComponent<{ wordData: WordData }> = (
  { wordData },
) => {
  return (
    <div class="definitionList">
      <h3>{wordData.word}</h3>
      <ul>
        {
          wordData.definitions.map((element) => (
            <li>
              <div>
                <h3>Definition</h3>
                <p>{element.definition}</p>
              </div>
              {!!element.example && (
                <div>
                  <h3>Example</h3>
                  <p>{element.example}</p>
                </div>
              )}
            </li>
          ))
        }
      </ul>
    </div>
  )
};

export default DefinitionList;
