import React from "react";
import styled from "styled-components";
// Components
import CategoryList from "./CategoryList";
// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../redux/shop/shop.selectors";

const Shop = ({ collection }) => {
  return (
    <Wrapper>
      {collection.map(({ id, ...otherCollectionProps }) => (
        <CategoryList key={id} {...otherCollectionProps} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const mapStateToProps = createStructuredSelector({
  collection: selectCollections,
});

export default connect(mapStateToProps)(Shop);
