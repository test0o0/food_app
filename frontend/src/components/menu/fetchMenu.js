export const fetchMenu = async () => {
    return {
      burgers: [
        {
          id: 1,
          title: "Classic Cheeseburger",
          description: "Juicy beef patty with melted cheese, lettuce, tomato, and pickles.",
          price: "$7.99",
          image: "https://example.com/images/classic-cheeseburger.jpg"
        },
        {
          id: 2,
          title: "BBQ Bacon Burger",
          description: "Beef patty with crispy bacon, BBQ sauce, and cheddar cheese.",
          price: "$8.99",
          image: "https://example.com/images/bbq-bacon-burger.jpg"
        }
      ],
      fries: [
        {
          id: 3,
          title: "Classic Fries",
          description: "Crispy golden fries seasoned with salt.",
          price: "$2.99",
          image: "https://example.com/images/classic-fries.jpg"
        },
        {
          id: 4,
          title: "Loaded Fries",
          description: "Topped with melted cheese, bacon bits, and green onions.",
          price: "$4.99",
          image: "https://example.com/images/loaded-fries.jpg"
        }
      ],
      drinks: [
        {
          id: 5,
          title: "Coca Cola",
          description: "Chilled refreshing classic Coca Cola.",
          price: "$1.99",
          image: "https://example.com/images/coca-cola.jpg"
        },
        {
          id: 6,
          title: "Iced Tea",
          description: "Refreshing iced tea served with lemon.",
          price: "$1.99",
          image: "https://example.com/images/iced-tea.jpg"
        }
      ]
    };
  };
  