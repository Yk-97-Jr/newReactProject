import React from "react";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import EmailField from "./EmailField";
import RatingField from "./RatingField";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-top: 0px;
`;

const Title = styled.h1`
  white-space: pre-line;
`;

const CreateInvoiceForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
`;

const Label = styled.label`
  font-size: 24px;
  margin-top: 10px;
`;

const EmailFieldInput = styled(EmailField)`
  height: 40px;
  font-size: 24px;
`;

const ProjectNameField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

const BilledAmountField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

const RatingFieldInput = styled(RatingField)`
  margin-top: 10px;
`;

const SubmitButton = styled.input`
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #666666;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 40px;
`;

const ErrorLabel = styled.div`
  font-size: 26px;
  color: red;
`;

const FileInput = styled.input`
  margin-top: 10px;
  font-size: 16px;
`;

const CreateInvoiceSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email can't be empty"),
  projectName: Yup.string().required("Project name can't be empty"),
  billedAmount: Yup.number()
    .required("Billed amount can't be empty")
    .min(1, "Invalid amont"),
  rating: Yup.number().min(1, "Rating can't be empty"),
});

class CreateInvoiceComponent extends React.Component {
  constructor(props) {
    super(props);

    this.fileInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values, actions) {
    alert(this.fileInput.current.value);
  }

  render() {
    return (
      <Container>
        <ContentContainer>
          <Title>{"Create Invoice"}</Title>

          <Formik
            initialValues={{
              email: "",
              projectName: "",
              billedAmount: "",
              rating: 0,
            }}
            onSubmit={this.handleSubmit}
            validationSchema={CreateInvoiceSchema}
          >
            {(props) => (
              <CreateInvoiceForm>
                <EmailFieldInput
                  name="email"
                  type="email"
                  label="Client's Email"
                />

                <Label>Project Name</Label>
                <ProjectNameField name="projectName" type="text" />

                <ErrorMessage name="projectName">
                  {(error) => <ErrorLabel>{error}</ErrorLabel>}
                </ErrorMessage>

                <Label>Billed Amount (USD)</Label>
                <BilledAmountField name="billedAmount" type="number" />

                <ErrorMessage name="billedAmount">
                  {(error) => <ErrorLabel>{error}</ErrorLabel>}
                </ErrorMessage>

                <RatingFieldInput name="rating" label={"Project Rating"} />

                <Label>Upload receipt(s)</Label>
                <FileInput type="file" ref={this.fileInput} />

                <SubmitButton type="submit" disabled={props.isSubmitting} />
              </CreateInvoiceForm>
            )}
          </Formik>
        </ContentContainer>
      </Container>
    );
  }
}

export default CreateInvoiceComponent;
