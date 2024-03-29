import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

const Tags=({color, text}) => {
    return (
      <Stack direction="horizontal" gap={2}>
        <Badge bg={color}>{text}</Badge>
      </Stack>
    );
  }

export default Tags