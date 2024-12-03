export const fetchMenu = async () => {
    return {
      burgers: [
        {
          id: 1,
          title: "Classic Cheeseburger",
          description: "Juicy beef patty with melted cheese, lettuce, tomato, and pickles.",
          price: "$7.99",
          image: "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
        },
        {
          id: 2,
          title: "BBQ Bacon Burger",
          description: "Beef patty with crispy bacon, BBQ sauce, and cheddar cheese.",
          price: "$8.99",
          image: "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
        }
      ],
      fries: [
        {
          id: 3,
          title: "Classic Fries",
          description: "Crispy golden fries seasoned with salt.",
          price: "$2.99",
          image: "https://media.istockphoto.com/id/1443993866/photo/french-fries-with-ketchup-and-cocktail-sauce.jpg?s=612x612&w=0&k=20&c=URpOsc5tds8tOfxK4ZO3Tkx6mwLho7fL_pTBSNdziBU="
        },
        {
          id: 4,
          title: "Loaded Fries",
          description: "Topped with melted cheese, bacon bits, and green onions.",
          price: "$4.99",
          image: "https://www.recipetineats.com/tachyon/2022/09/Crispy-Fries_8.jpg"
        }
      ],
      drinks: [
        {
          id: 5,
          title: "Coca Cola",
          description: "Chilled refreshing classic Coca Cola.",
          price: "$1.99",
          image: "https://thumbs.dreamstime.com/b/coca-cola-drink-glass-ice-cubes-isolated-white-background-57156819.jpg"
        },
        {
          id: 6,
          title: "Iced Tea",
          description: "Refreshing iced tea served with lemon.",
          price: "$1.99",
          image: "https://thumbs.dreamstime.com/b/coca-cola-drink-glass-ice-cubes-isolated-white-background-57156819.jpg"
        }
      ]
    };
  };
  