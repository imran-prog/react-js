import React from "react";
import styled from "styled-components";
// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../redux/shop/shop.selectors";
// Components
import CategoryList from "./CategoryList";

const Collection = ({ collection }) => {
  return (
    <Wrapper>
      {collection.map(({ id, ...otherCollectionProps }) => (
        <CategoryList key={id} {...otherCollectionProps} />
      ))}
    </Wrapper>
  );
};

// Styling
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// Redux
const mapStateToProps = createStructuredSelector({
  collection: selectCollections,
});

// Export
export default connect(mapStateToProps)(Collection);
