import ShoeDiv from "./ShoeDiv";

const MenShoes = [
  {
    src: "src/assets/men/jayson-hinrichsen-qLs4WYXqLNY-unsplash.jpg",
    shoeName: "Hinrichen Boots",
    shoePrice: "Ksh. 4500",
    id: crypto.randomUUID(),
  },
  {
    src: "src/assets/men/lefteris-kallergis-j1GiPlvSGWI-unsplash.jpg",
    alt: "Man shoe #",
    shoeName: "Nike Sneakers",
    shoePrice: "Ksh. 5500",
    id: crypto.randomUUID(),
  },
  {
    src: "src/assets/men/maksim-larin-1vy2QcZd5FU-unsplash.jpg",
    shoeName: "Brown Sneakers",
    shoePrice: "Ksh. 4500",
    id: crypto.randomUUID(),
  },
  {
    src: "src/assets/men/mana-akbarzadegan-Y0RB2z12F1A-unsplash.jpg",
    shoeName: "Brown Leather Sneakers",
    shoePrice: "Ksh. 6500",
    id: crypto.randomUUID(),
  },
  {
    src: "src/assets/men/maxim-hopman-8cT5ja0P_N4-unsplash.jpg",
    shoeName: "Men Work Boots",
    shoePrice: "Ksh. 8500",
    id: crypto.randomUUID(),
  },
  {
    src: "src/assets/men/noah-smith-LkuH3Txi_gs-unsplash.jpg",
    shoeName: "Brown Office Leather Shoes",
    shoePrice: "Ksh. 6500",
    id: crypto.randomUUID(),
  },
  {
    src: "src/assets/men/radek-skrzypczak-WlB8TsI_th0-unsplash.jpg",
    shoeName: "Laced Brown Leather",
    shoePrice: "Ksh. 5800",
    id: crypto.randomUUID(),
  },
  {
    src: "src/assets/men/rafaela-biazi-kV3yiegGJUQ-unsplash.jpg",
    shoeName: "Men Converse",
    shoePrice: "Ksh. 2500",
    id: crypto.randomUUID(),
  },
  {
    src: "src/assets/men/rupixen-com-OSG5rYIWod0-unsplash.jpg",
    shoeName: "Laced Office Leather Shoes",
    shoePrice: "Ksh. 7500",
    id: crypto.randomUUID(),
  },
  {
    src: "src/assets/men/xavier-teo-SxAXphIPWeg-unsplash.jpg",
    shoeName: "Nike Jordan 1",
    shoePrice: "Ksh. 22,500",
    id: crypto.randomUUID(),
  },
];

function MaleShoes() {
  return (
    <section className="section" id="menSection">
      {MenShoes.map((menShoe) => (
        <ShoeDiv key={menShoe.id} menShoe={menShoe}>
          {menShoe}
        </ShoeDiv>
      ))}
    </section>
  );
}

export default MaleShoes;
