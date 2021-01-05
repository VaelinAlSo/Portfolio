import { Card } from "antd";
import React from "react";

export default function Bienvenue() {
  const { Meta } = Card;

  return (
    <Card
      style={{
        width: 350,
        height: 120,
        backgroundColor: "#fafafa",
      }}
    >
      <Meta
        title={
          <h6 style={{ fontSize: "13px" }}>
            Bienvenue sur le site du Portfolio de Gilles <br></br>
             Quirynen
          </h6>
        }
        description={"Nous sommes le " + new Date().toLocaleDateString()}
      />
    </Card>
  );
}
