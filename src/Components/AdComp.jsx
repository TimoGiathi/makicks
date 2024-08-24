const messages = [
  {
    title: "Quality you can trust",
    insight:
      " Every shoe in our inventory meets the highest standards of durability, comfort, and style. Quality and craftsmanship are prioritized bringing you footwear that stands the test of time.",
    id: crypto.randomUUID(),
  },
  {
    title: "Expert Assistance",
    insight:
      "  Our team of experts is committed to providing personalized assistance on matters such as seeking style advice, the right fit,the latest trends, we're here to make your shopping experience enjoyable and stress-free.",
    id: crypto.randomUUID(),
  },
  {
    title: "Instore Pickup",
    insight: "  Shop online and pickup in our stores all over the country",
    id: crypto.randomUUID(),
  },
  {
    title: "Countrywide delivery",
    insight:
      " Receive your new shoes promptly with our fast and reliable shipping services",
    id: crypto.randomUUID(),
  },
];
import FlexItem from "./FlexItem";
function AdComp() {
  return (
    <section className="section2">
      <h2 className="title">Why shop with us ?</h2>
      <div id="flexContainer">
        {messages.map((message) => (
          <FlexItem message={message} key={message.id} />
        ))}
      </div>
    </section>
  );
}

export default AdComp;
