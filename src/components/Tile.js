import React from 'react';

function Tile({image, imageAlt, title, paragraphs }) {
                if (image) {
                   return (<section>
                   <img src={image} alt={imageAlt}/>
                   </section>)
                } else {return (<section>
                    <h2>{title}</h2>
                    {paragraphs.map((paragraph, index) =>
                    <p key={index}>{paragraph}</p>)}
                    </section>)}
                }
export default Tile;
