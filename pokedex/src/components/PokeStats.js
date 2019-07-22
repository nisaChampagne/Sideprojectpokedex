import React from "react"
import { Card } from 'semantic-ui-react'


export default function PokeStats(props) {
  return (
      <Card className='ui centered class'>
      <Card.Content className='stats' >
        <Card.Description>
        Order={props.Order}
        </Card.Description>
        <Card.Description>
        Height={props.Height} cm
        </Card.Description>
        <Card.Description>
        Experience={props.base} XP
        </Card.Description>
        <Card.Description>
        Weight={props.Weight} lbs
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
