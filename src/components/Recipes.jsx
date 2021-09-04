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
console.log(esr);
console.log(egr);
import { useState } from "react";
const Recipes = () => {
  const [recipe, setRecipe] = useState({});

  return (
    <div>
      <h3>current recipe</h3>
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