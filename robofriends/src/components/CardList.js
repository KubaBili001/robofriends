import React from "react";
import Card from './Card';

const CardList = ({ robots }) => {
    return (
      <div>
        {
            robots.map((item, i) => {
                return (
                    <Card 
                    key={i} 
                    name={item.name} 
                    email={item.email} 
                    id={item.id}/>
                )
            })
        }
      </div>
    );
}

export default CardList;