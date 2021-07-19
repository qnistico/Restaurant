import React, { useEffect } from "react";
import MenuItemTemplate from "./MenuItemTemplate";
import pasta1 from "./img/pasta1.jpg";

function PennePasta(props) {
    
  return (
    <div>
      <MenuItemTemplate
        foodimg={pasta1}
        foodtitle="Penne Pasta"
        fooddescription="Organic homemade penne pasta with chickpeas, diced beef, tomatoes, spinach and olives"
        foodingredients="Wheat pasta, chickpeas, cream, oregeno, olives, olive oil, diced beef and tomatoes"
        foodallergens="Gluten | Dairy"
        foodprice="$17.00"
      />
    </div>
  );
}

export default PennePasta;
