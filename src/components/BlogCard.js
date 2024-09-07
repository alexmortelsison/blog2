import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const BlogCard = ({ title, description, image }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
