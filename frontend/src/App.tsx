import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Card, Row, Col } from "antd";
import { SearchUser } from "./Components/SearchUser";

function App() {
  return (
    <>
      <Row>
        <Col xs={16} offset={4}>
          <Card title="Search User Location">
            <SearchUser />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default App;
