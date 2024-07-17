"use client"
import { useState } from "react";
import { Container, Row, Col, Card, Form, Table} from "react-bootstrap"

export default function Pricing(){
    const [isYearly, setIsYearly] = useState(false);
  const [isCompany, setIsCompany] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const handleCompanyToggle = () => {
    setIsCompany(!isCompany);
  };
  return (
    <div className="container mt-2 rounded-3xl">
      <Container>
        <h2 className="text-center mb-3 mt-5 text-3xl">Pricing</h2>
        <div className="flex items-center justify-center">
          <span className={`mr-2 ${!isCompany ? 'font-weight-bold' : ''}`}>Individual</span>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
              checked={isCompany}
              onChange={handleCompanyToggle}
              className="custom-switch"
            />
          </Form>
          <span className={`ml-2 ${isCompany ? 'font-weight-bold' : ''}`}>Company</span>
          <style jsx>{`
            .custom-switch .custom-control-input:checked~.custom-control-label::before {
              background-color: #66b2b2; /* Change this to your desired color */
            }
            .custom-switch .custom-control-label::before {
              width: 2.5rem;
              height: 1.25rem;
            }
            .custom-switch .custom-control-label::after {
              top: calc(0.25rem - 0.125rem);
              width: 1rem;
              height: 1rem;
            }
          `}</style>
        </div>
        <Row className='mt-5 mb-10 flex items-center justify-center'>
          <Col md={8}>
            <Card className='p-4'>
              <Card.Body>
                {isCompany ? (
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Benefits</th>
                        <th>Without Paincure.AI</th>
                        <th>With Paincure.AI</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Monthly subscription</td>
                        <td>£ 200.99 per month</td>
                        <td>£ 39.99 per month</td>
                      </tr>
                      <tr>
                        <td>One to one session with a healthcare expert</td>
                        <td>£ 299.99 per month</td>
                        <td>£ 59.99 per month</td>
                      </tr>
                      <tr>
                        <td>Private surgery </td>
                        <td>£ 499.99 per month</td>
                        <td>£ 99.99 per month</td>
                      </tr>
                      <tr>
                        <td>Pain med</td>
                        <td>£ 199.99 per month</td>
                        <td>£ 49.99 per month</td>
                      </tr>
                      <tr>
                        <td>In-clinic PT Session </td>
                        <td>£ 199.99 per month</td>
                        <td>£ 49.99 per month</td>
                      </tr>
                    </tbody>
                  </Table>
                ) : (
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Benefits</th>
                        <th>Without Paincure.AI</th>
                        <th>With Paincure.AI</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Monthly subscription</td>
                        <td>£ 50.99 per month</td>
                        <td>£ 9.99 per month</td>
                      </tr>
                      <tr>
                        <td>One to one session with a healthcare expert</td>
                        <td>£ 99.99 per month</td>
                        <td>£ 29.99 per month</td>
                      </tr>
                      <tr>
                        <td>Private surgery </td>
                        <td>£ 99.99 per month</td>
                        <td>£ 29.99 per month</td>
                      </tr>
                      <tr>
                        <td>Pain med</td>
                        <td>£ 99.99 per month</td>
                        <td>£ 29.99 per month</td>
                      </tr>
                      <tr>
                        <td>In-clinic PT Session </td>
                        <td>£ 99.99 per month</td>
                        <td>£ 29.99 per month</td>
                      </tr>
                    </tbody>
                  </Table>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}