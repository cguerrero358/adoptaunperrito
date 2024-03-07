import React from 'react'
import Card from 'react-bootstrap/Card';
import Tags from './Tags'


const Mycard = ({imagen, nombre, descripcion, color, text}) => {
  return (
    <>
      <Card style={{ width: "18rem"}}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Tags color={color} text={text}/>
      </Card.Body>
    </Card>
    </>
  )
}

export default Mycard
