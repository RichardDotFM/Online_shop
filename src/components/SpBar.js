import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Container, Dropdown} from "react-bootstrap";

const SpBar = observer(() => {
  const { product } = useContext(Context);
  return (
      
          
      <Container>
          
          
      {product.sps.map((sp) => (
          <Dropdown.Item
              style={{cursor: 'pointer'}}
              active={sp.id === product.selectedSp.id}
              onClick={() => product.setSelectedSp(sp)}
              key={sp.id}
          >
              {sp.name}
          </Dropdown.Item>
         

      ))}  

</Container>
  );
});

export default SpBar;