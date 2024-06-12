import React, { FC, useState } from "react";
import AddPizzaForm from "./components/AddPizzaForm";
import DisplayPizzas from "./components/DisplayPizzas";
import Pizza from "./models/Pizza";
import "./App.css";

// interface MyOrder {
//   title: string,
//   quantity?: number;
// }

// type Order = {
//   title: string,
//   quantity?: number;//? ne objazatelnoe svojstvo
// };

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]); //spred
  };

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(
      pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza))
    );
  };


  const deletePizza = (id: number) => {
   
    const newPizzasList = pizzasList.filter(pizza => pizza.id !== id);
    setPizzasList(newPizzasList);
  };



  console.log("pizzasList >>>> ", pizzasList);
  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Наша пиццерия!</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas pizzasList={pizzasList}
        deletePizza = {deletePizza}
        updatePizza = { updatePizza} />
      </div>
    </div>
  );
};

export default App;
