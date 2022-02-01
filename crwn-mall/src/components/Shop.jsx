import React from "react";
import styled from "styled-components";
// Data
import ShopData from "./ShopData";
// Components
import CategoryList from "./CategoryList";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: ShopData,
    };
  }

  render() {
    const collection = this.state.collection;
    return (
      <Wrapper>
        {collection.map(({ id, ...otherCollectionProps }) => (
          <CategoryList key={id} {...otherCollectionProps} />
        ))}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

export default Shop;
