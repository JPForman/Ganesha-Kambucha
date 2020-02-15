import React from "react";
import Kombucha from "./Kombucha";

const masterKombuchaList = [
  {
    name: "Shiva's Third Eye",
    flavor: "Rasberry Honey Lime",
    price: "$3",
    pintsLeft: "42"
  },
  {
    name: "Vishnu's Couch",
    flavor: "Honey Lemon Ginger",
    price: "$3",
    pintsLeft: "108"
  }

];

function KombuchaList(){
  const brewHeaders={
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '20% 20% 20% 20% 20%',
    textAlign: 'center',
    backgroundColor: '#ace3af',
    fontFamily: 'fantasy',
    fontWeight: 'bold',
  }

  return (
    <div>
      <div style={brewHeaders}>
        <h1>Brew Name</h1>
        <h1>Flavor</h1>
        <h1>Price</h1>
        <h1>Sell a Pint</h1>
        <h1># of Pints Left</h1>
      </div>

      {masterKombuchaList.map((kombucha,index) =>
        <Kombucha
        name={kombucha.name}
        flavor={kombucha.flavor}
        price={kombucha.price}
        pintsLeft={kombucha.pintsLeft}/>
      )}
    </div>
  );
}

export default KombuchaList;
