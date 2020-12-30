import { Card } from "antd";
import React from "react";
import GridWithIcon from "../shared/GridWithIcon";
import { ScheduleTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
export default function Rdv(props) {
  const { Meta } = Card;
  const setNav = () => {
    props.nav("Horaires");
  };
  return (
    <Card
      title={
        <GridWithIcon
          icon={<ScheduleTwoTone twoToneColor="green" />}
          text="Prendre rendez-vous"
          color="green"
        />
      }
      hoverable
      style={{ width: 350, backgroundColor: "#fafafa", marginTop: "2%" }}
    >
      <Meta
        description={
          <p style={{ fontSize: "14px" }}>
            Pour prendre rdv, veuillez contacter le 086.32.22.16 Pour vérifier
            la disponibilité du secrétariat/Psychologue, veuillez consulter la page
       {/*     <Link onClick={setNav} to="/Horaires">
              <a href="/Horaires"> Horaires </a>
        </Link> */}
            du site.
          </p>
        }
      />
    </Card>
  );
}
