import React from 'react';
import './App.css';
import NavButton from "./components/NavButtons";
import Product from "./components/Product";
import Tile from "./components/Tile";
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import design from './assets/our_story.png';


function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
          <nav>
              <NavButton
                  value= "in the collection"
                  disable={false}
              />
              <NavButton
                  value= "shop all bags"
                  disable={false}
              />
              <NavButton
                  value= "pre-orders"
                  disable={true}
              />
          </nav>
          <main>
              <Product
                  label={"Best seller"}
                  title={"The handy bag"}
                  image={bag1}
                  price={400}
              />
              <Product
                  label={"New collection"}
                  title={"The stylish bag"}
                  image={bag2}
                  price={250}
              />
              <Product
                  label={"Best seller"}
                  title={"The simple bag"}
                  image={bag3}
                  price={300}
              />
              <Product
                  label={"Best seller"}
                  title={"The trendy bag"}
                  image={bag4}
                  price={150}
              />
          </main>
              <footer>
                  <Tile
                      title={"THE BRAND"}
                      paragraphs={["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper nisl in urna" +
                      " viverra,a condimentum est faucibus. Fusce varius felis erat. Donec semper lacinia tortor id " +
                      "dignissim.Integer non velit malesuada, fringilla nisi eget, dignissim massa.",
                      "Proin gravida vehicula iaculis. Ut suscipit est quis est tempus, nec suscipit ante placerat. " +
                      "Sed nec arcu ut tellus finibus tincidunt sit amet sed risus."]}
                  />
                  <Tile
                      image={brand}
                      imageAlt={"Brand"}
                  />
                  <Tile
                      image={design}
                      imageAlt={"Designers"}
                  />
                  <Tile
                      title={"OUR STORY"}
                      paragraphs={["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper nisl in urna" +
                      " viverra,a condimentum est faucibus. Fusce varius felis erat. Donec semper lacinia tortor id " +
                      "dignissim.Integer non velit malesuada, fringilla nisi eget, dignissim massa.",
                          "Proin gravida vehicula iaculis. Ut suscipit est quis est tempus, nec suscipit ante placerat. " +
                          "Sed nec arcu ut tellus finibus tincidunt sit amet sed risus."]}
                  />
              </footer>
      </>
  );
}
export default App;



