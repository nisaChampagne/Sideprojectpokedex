import React from "react"
import { Card } from "semantic-ui-react"


export default function PokeScreen(props) {
  return (
    <Card className='ui centered class'>
      <Card.Content className='screen'>
        <Card.Header> {props.name}</Card.Header>
      </Card.Content>
    </Card>
  );
}
