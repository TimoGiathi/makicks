import ShoeDiv from "./ShoeDiv";

const WomenShoes = [
  {
    id: crypto.randomUUID(),
    src: "src/assets/women/alexandra-gorn.jpg",
    shoeName: "Pink Flats",
    shoePrice: "Ksh. 3,500",
  },
  {
    id: crypto.randomUUID(),
    src: "src/assets/women/camila-damasio-unsplash.jpg",
    shoeName: "Black Women Boots",
    shoePrice: "Ksh. 4,200",
  },
  {
    id: crypto.randomUUID(),
    src: "src/assets/women/kier-in-sight-archives-unsplash.jpg",
    shoeName: "Coral Women Boots",
    shoePrice: "Ksh. 3,500",
  },
  {
    id: crypto.randomUUID(),
    src: "src/assets/women/emily-pottiger-unsplash.jpg",
    shoeName: "Office Heels",
    shoePrice: "Ksh. 5,200",
  },
  {
    id: crypto.randomUUID(),
    src: "src/assets/women/laura-chouette-unsplash.jpg",
    shoeName: "White Flats",
    shoePrice: "Ksh. 3,500",
  },
  {
    id: crypto.randomUUID(),
    src: "src/assets/women/marcus-lewis-unsplash.jpg",
    shoeName: "Office Heels",
    shoePrice: "Ksh. 3,500",
  },
  {
    id: crypto.randomUUID(),
    src: "src/assets/women/mohammad-metri-unsplash.jpg",
    shoeName: "Flower Pattern Heels",
    shoePrice: "Ksh. 6,500",
  },
  {
    id: crypto.randomUUID(),
    src: "src/assets/women/tyron-harkiss-unsplash.jpg",
    shoeName: "Coral Kitten Heels",
    shoePrice: "Ksh. 5,800",
  },
  {
    id: crypto.randomUUID(),
    src: "src/assets/women/verity-sanders-q4ExhrHaSLY-unsplash.jpg",
    shoeName: "Brown Women Boots",
    shoePrice: "Ksh. 7,500",
  },
  {
    id: crypto.randomUUID(),
    src: "src/assets/women/winter-boots-3846863_1920.jpg",
    shoeName: "Winter Boots",
    shoePrice: "Ksh. 10,500",
  },
  {
    id: crypto.randomUUID(),
    src: "src/assets/women/winter-boots-795706_1920.jpg",
    shoeName: "Winter Boots",
    shoePrice: "Ksh. 12,500",
  },
  {
    id: crypto.randomUUID(),
    src: "src/assets/women/zoe-lQp50s8GRek-unsplash.jpg",
    shoeName: "Pink Flat Mules",
    shoePrice: "Ksh. 4,500",
  },
];

function FemaleShoes() {
  return (
    <section className="section" id="womenSection">
      {WomenShoes.map((womenshoe) => (
        <ShoeDiv key={womenshoe.id} womenshoe={womenshoe}>
          {womenshoe}
        </ShoeDiv>
      ))}
    </section>
  );
}

export default FemaleShoes;
