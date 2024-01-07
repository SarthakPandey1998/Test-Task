// src/components/UserCreate.js
import React from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { addUser } from "../redux/actions/userActions";
import * as Yup from "yup";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";

const UserCreate = ({ addUser }) => {
  const initialValues = {
    name: "",
    email: "",
    gender: "",
    status: "",
    hobbies: [],
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    gender: Yup.string().required("Required"),
    status: Yup.string().required("Required"),
    hobbies: Yup.array()
      .min(1, "Select at least one hobby")
      .required("Required"),
  });

  const onSubmit = (values) => {
    // Handle form submission logic (e.g., API call to create a new user)
    console.log(values);
    addUser({ id: Date.now(), ...values });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleCheckboxChange = (value) => {
    const selectedHobbies = formik.values.hobbies.includes(value)
      ? formik.values.hobbies.filter((hobby) => hobby !== value)
      : [...formik.values.hobbies, value];
    formik.setFieldValue("hobbies", selectedHobbies);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Create User</h2>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    {...formik.getFieldProps("name")}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <Form.Text className="text-danger">
                      {formik.errors.name}
                    </Form.Text>
                  ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <Form.Text className="text-danger">
                      {formik.errors.email}
                    </Form.Text>
                  ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <div>
                    <Form.Check
                      type="radio"
                      label="Male"
                      id="male"
                      value="male"
                      checked={formik.values.gender === "male"}
                      onChange={() => formik.setFieldValue("gender", "male")}
                      inline
                    />
                    <Form.Check
                      type="radio"
                      label="Female"
                      id="female"
                      value="female"
                      checked={formik.values.gender === "female"}
                      onChange={() => formik.setFieldValue("gender", "female")}
                      inline
                    />
                  </div>
                  {formik.touched.gender && formik.errors.gender ? (
                    <Form.Text className="text-danger">
                      {formik.errors.gender}
                    </Form.Text>
                  ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="status">
                  <Form.Label>Status</Form.Label>
                  <Form.Select {...formik.getFieldProps("status")}>
                    <option value="" disabled>
                      Select status
                    </option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </Form.Select>
                  {formik.touched.status && formik.errors.status ? (
                    <Form.Text className="text-danger">
                      {formik.errors.status}
                    </Form.Text>
                  ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="hobbies">
                  <Form.Label>Hobbies</Form.Label>
                  <div>
                    <Form.Check
                      type="checkbox"
                      label="Reading"
                      id="reading"
                      value="reading"
                      checked={formik.values.hobbies.includes("reading")}
                      onChange={() => handleCheckboxChange("reading")}
                      inline
                    />
                    <Form.Check
                      type="checkbox"
                      label="Gaming"
                      id="gaming"
                      value="gaming"
                      checked={formik.values.hobbies.includes("gaming")}
                      onChange={() => handleCheckboxChange("gaming")}
                      inline
                    />
                    <Form.Check
                      type="checkbox"
                      label="Traveling"
                      id="traveling"
                      value="traveling"
                      checked={formik.values.hobbies.includes("traveling")}
                      onChange={() => handleCheckboxChange("traveling")}
                      inline
                    />
                  </div>
                  {formik.touched.hobbies && formik.errors.hobbies ? (
                    <Form.Text className="text-danger">
                      {formik.errors.hobbies}
                    </Form.Text>
                  ) : null}
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" type="submit">
                    Create User
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(null, { addUser })(UserCreate);
