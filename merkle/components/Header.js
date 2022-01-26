import React from "react";
import { Header, Divider } from "semantic-ui-react";

const MyHeader = () => {
  return (
    <React.Fragment>
    <Header as='h1' textAlign='center'>KaliWhitelistManager</Header>
    <Divider />
    </React.Fragment>
  );
};

export default MyHeader;
