import React from "react";
import { Form } from "../components/Form";

const Register = () => {
  return <Form root="/api/user/register/" method="register" />;
};

export default Register;
