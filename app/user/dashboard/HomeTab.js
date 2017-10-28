import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import _ from 'lodash';
import PostItem from '../post/PostItem';

const HomeTab = () => {
  const postItems = _.times(10, n => <PostItem key={n.toString()} />);
  return (
    <Container text className="main">
      <Card.Group>
        {postItems}
      </Card.Group>
    </Container>
  );
};

export default HomeTab;