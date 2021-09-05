import inlcludedExample from './includesExample';
inlcludedExample(['a', 'b', 'c'], 'b')
const esr = {
  leather: 2,
  iron: 1,
  refined: 4,
};

const egr = {
  ...esr,
  leathers: 1,
  rm: 4,
};

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();

console.log("es7",egr);
console.log("es8",Object.values(egr));
import { useState } from "react";
const Recipes = () => {
  const [recipe, setRecipe] = useState({});

  return (
    <div>
      <h3>current recipe hghjfg</h3>
      <button onClick={() => setRecipe(esr)}>esr</button>
      <button onClick={() => setRecipe(egr)}>egr</button>
      <ul>
        {Object.keys(recipe).map((material, index) => (
          <li key={"material-"+index}>
              {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Recipes;