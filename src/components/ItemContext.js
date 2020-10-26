import React, {useState, createContext} from 'react';
import product1 from '../images/product1.jpg';
import product2 from '../images/product2.jpg';
import product3 from '../images/product3.jpg';
import product4 from '../images/product4.jpg';
import product5 from '../images/product5.jpg';
import product6 from '../images/product6.jpg';

export const ItemContext = createContext();

export const ItemProvider = props => {
  var data = [
    {
      id: 1,
      title: "Adidas Shoes",
      images: product1,
      price: 2500,
      company: "Addidas",
      info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    },
    {
      id: 2,
      title: "Football Jersey",
      images: product2,
      price: 1500,
      company: "NIKE",
      info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    },
    {
      id: 3,
      title: "Black Watch",
      images: product3,
      price: 50000,
      company: "Rolex",
      info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    },
    {
      id: 4,
      title: "Iphone",
      images: product4,
      price: 35000,
      company: "Apple",
      info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    },
    {
      id: 5,
      title: "Nike Football",
      images: product5,
      price: 950,
      company: "NIKE",
      info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    },
    {
      id: 6,
      title: "Suit",
      images: product6,
      price: 10000,
      company: "Raymond",
      info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    },
  ];

    const [items, setItems] = useState(data);
    const [cart, setCart] = useState([]);
    const [compare, setCompare] = useState([]);
    return(
        <ItemContext.Provider value={[[items, setItems], [cart, setCart], [compare, setCompare]]}>
            {props.children}
        </ItemContext.Provider>
    )
}