import React from "react";
import styled from "styled-components";
// Components
import MenuItem from "./MenuItem";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
        },
        {
            title: "jackets",
            imageUrl: ""
        }
      ],
    };
  }
}
