const MenuSection = ({ title, items }) => {
  return (
    <div className="mb-12">
      <h3 className="font-serif text-2xl text-bosco mb-6 border-b border-gray-200 pb-2">{title}</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between border-b border-gray-100 pb-4">
            <div>
              <h4 className="font-medium text-lg">{item.name}</h4>
              <p className="text-grigio text-sm">{item.description}</p>
            </div>
            <span className="text-bosco font-medium">{item.price}€</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
