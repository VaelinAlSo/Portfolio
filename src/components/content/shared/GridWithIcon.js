import { Row, Col } from "antd";

export default function GridWithIcon(props) {
  return (
    <div style={{ marginBottom: "5%" }} onClick={props.action}>
      <Row>
        <Col flex="25px">{props.icon}</Col>
        <Col flex="auto">
          <p style={{ color: props.color }}>{props.text}</p>
        </Col>
      </Row>
    </div>
  );
}
