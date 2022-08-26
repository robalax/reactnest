import React, { useState, useEffect } from "react";
import { Input, Row, Col, Button, Form, Card, message, Skeleton } from "antd";

//custom components
import { ResultDescription } from "../../Components/SearchUser/Components/ResultDescription";

//import interfaces
import SearchInterface from "../../Interfaces/Search";
import ResultsListInterface from "../../Interfaces/ResultsList";
import ResultInterface from "../../Interfaces/Result";

//services
import { getApi } from "../../services/getApi";

export const SearchUser = () => {
  const [results, setResults] = useState<ResultsListInterface>({ list: [] });
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [pageLoading, setPageLoading] = useState<boolean>(true);

  useEffect(() => {
    setPageLoading(false);
  }, []);

  const fetchResults = (values: SearchInterface) => {
    setDataLoading(true);
    getApi({
      cbSuccess: (response: any) => {
        setDataLoading(false);
        let searchedData = [];
        if (response && response.length > 0) {
          searchedData = response;
        }
        setResults({
          list: searchedData,
        });
      },
      cbFailure: (err: any) => {
        setDataLoading(false);
        message.error(
          err?.response?.message ?? "Something went wrong while fetch results."
        );
      },
      url: `persons/?query=${values.query}`,
      value: null,
    });
  };

  const onFailed = () => {};

  return (
    <>
      <Form onFinish={fetchResults}>
        <Row>
          <Col xs={24}>
            <Form.Item
              name={"query"}
              rules={[
                { required: true, message: "Please enter keyword to search." },
              ]}
            >
              <Input placeholder="Search..." type={"search"} />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item>
              <Button htmlType={"submit"} type="primary" loading={dataLoading}>
                Search
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <h3>Search Results</h3>
      <hr />

      <Row>
        {!dataLoading ? (
          results.list.map((result: ResultInterface) => {
            return (
              <Col xs={24}>
                <Card hoverable style={{ width: "100%" }}>
                  <Card.Meta
                    title={result.name}
                    description={<ResultDescription result={result} />}
                  />
                </Card>
              </Col>
            );
          })
        ) : (
          <Skeleton active />
        )}
        {results.list.length == 0 && <>No results found.</>}
      </Row>
    </>
  );
};
