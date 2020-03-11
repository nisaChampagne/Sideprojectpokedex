import React from "react"
import { Card } from "semantic-ui-react"


export default function PokeScreen(props) {
  return (
    <Card className='ui centered class'>
      <Card.Content className='screen' style={{margin: '0 auto'}}>
        <Card.Header > {props.name}</Card.Header>
      </Card.Content>
    </Card>
  );
}
