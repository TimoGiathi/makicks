import ShoeDiv from "./ShoeDiv";

const ChildShoes = [
  {
    id: crypto.randomUUID(),
    src: "src/assets/children's/baby-shoes-4926111_1920.jpg",
    shoeName: "Green Children's Boots",
    shoePrice: "Ksh. 4,500",
  },
  {
    id: crypto.randomUUID(),
    src: "src/assets/children's/baby-shoes-505471_1920.jpg",
    shoeName: "BOY GREEN BOOTS",
    shoePrice: "Ksh. 5,500",
  },
  {
    id: crypto.randomUUID(),
    src: "src/assets/children's/childrens-shoes-687958_1280.jpg",
    shoeName: "Red Boy Shoes",
    shoePrice: "Ksh. 3,500",
  },
  {
    id: crypto.randomUUID(),
    src: "src/assets/children's/childrens-shoes-687959_1920.jpg",
    shoeName: "White Children's Boots",
    shoePrice: "Ksh. 3,500",
  },
  {
    id: crypto.randomUUID(),
    src: "src/assets/children's/rainbow-colors-2405766_1920.jpg",
    shoeName: "Rainbow Children's Shoes",
    shoePrice: "Ksh. 3,500",
  },
  {
    id: crypto.randomUUID(),
    src: "src/assets/children's/max-kleinen-aqh8hybsNz0-unsplash.jpg",
    shoeName: "Blue Children's Shoes",
    shoePrice: "Ksh. 4,100",
  },
  {
    id: crypto.randomUUID(),
    src: "src/assets/children's/shoes-1433925_1280.jpg",
    shoeName: "Superhero Kids' Sneakers",
    shoePrice: "Ksh. 6,800",
  },
  {
    id: crypto.randomUUID(),
    src: "src/assets/children's/sneakers-4197495_1280.jpg",
    shoeName: "Red Mini Boots",
    shoePrice: "Ksh. 1,800",
  },
];

function ChildrenShoes() {
  return (
    <section className="section" id="childrenSection">
      {ChildShoes.map((shoe) => (
        <ShoeDiv key={shoe.id} shoe={shoe}>
          {shoe}
        </ShoeDiv>
      ))}
    </section>
  );
}

export default ChildrenShoes;
