import PickedImage from "./PickedImage";
const PickedShoes = [
  {
    src: "src/assets/women/marcus-lewis-unsplash.jpg",
    alt: "Heels",
    id: crypto.randomUUID(),
  },
  {
    src: "src/assets/men/maxim-hopman-8cT5ja0P_N4-unsplash.jpg",
    alt: "Boots",
    id: crypto.randomUUID(),
  },
  {
    src: "src/assets/women/laura-chouette-unsplash.jpg",
    alt: "Sneakers",
    id: crypto.randomUUID(),
  },
  {
    src: "src/assets/men/noah-smith-LkuH3Txi_gs-unsplash.jpg",
    alt: "Leather",
    id: crypto.randomUUID(),
  },
];

function TopPicks() {
  return (
    <section>
      <h2 className="title">Our Top Picks</h2>
      <div id="topPicks">
        {PickedShoes.map((pick) => (
          <PickedImage key={pick.id} pick={pick}>
            {pick.alt}
          </PickedImage>
        ))}
      </div>
    </section>
  );
}

export default TopPicks;
