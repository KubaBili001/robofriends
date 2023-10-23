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
                    name={robots[i].name} 
                    email={robots[i].email} 
                    id={robots[i].id}/>
                )
            })
        }
      </div>
    );
}

export default CardList;