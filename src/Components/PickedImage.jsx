function PickedImage({ pick, children }) {
  return (
    <div className="flexShoes">
      <img src={pick.src} alt={pick.alt} className="pointer topShoes" />
      <p className="categories">{children}</p>
    </div>
  );
}

export default PickedImage;
