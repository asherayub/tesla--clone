import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        model="Tesla Model S"
        backgroundImg="model-s.jpg"
        description="Order online for Touchless Delivery"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        model="Tesla Model Y"
        backgroundImg="model-y.jpg"
        description="Order online for Touchless Delivery"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        model="Tesla Model 3"
        backgroundImg="model-3.jpg"
        description="Order online for Touchless Delivery"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        model="Tesla Model X"
        backgroundImg="model-x.jpg"
        description="Order online for Touchless Delivery"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        model="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        description="Money-back gaurantee"
        leftBtnText="order now"
        rightBtnText="learn more"
      />
      <Section
        model="Solar for new roofs"
        backgroundImg="solar-roof.jpg"
        description="solar roof costs less than new roof plus solar panels"
        leftBtnText="order now"
        rightBtnText="learn more"
      />
      <Section
        model="Accessories"
        backgroundImg="accessories.jpg"
        leftBtnText="shop now"
      />
    </Container>
  );
}
export default Home;
const Container = styled.div`
  height: 100vh;
`;
