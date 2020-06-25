import React from 'react';
import { Card } from 'semantic-ui-react';

const Account = () => (
  <Card>
    <Card.Content>
      <Card.Header>username</Card.Header>
      <Card.Meta>
        Date Joined: dateJoined
        <p>
          Membership Level: membership
        </p>
      </Card.Meta>
    </Card.Content>
  </Card>
)
export default Account;