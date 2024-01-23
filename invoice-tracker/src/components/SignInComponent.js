import React from "react";
import styled from "styled-components";

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
  margin-top: 50px;
`;

const Title = styled.h1`
  white-space: pre-line;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
`;

const Label = styled.label`
  margin-top: 20px;
  font-size: 24px;
`;

const EmailInput = styled.input`
  height: 40px;
  font-size: 24px;
`;

const PasswordInput = styled.input`
  height: 40px;
  font-size: 24px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;

const CheckboxLabel = styled(Label)`
  margin-top: 7px;
  margin-left: 10px;
`;

const RememberMeCheckbox = styled.input`
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

class SignInComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailError: "",
      passwordError: "",
    };

    this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
    this.handleRememberMeInputChange =
      this.handleRememberMeInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailInputChange(e) {
    this.setState({ email: e.target.value, emailError: "" });
  }

  handlePasswordInputChange(e) {
    this.setState({ password: e.target.value, passwordError: "" });
  }

  handleRememberMeInputChange(e) {
    this.setState({ rememberMe: e.target.value });
  }

  handleSubmit(e) {
    var emailError = "";
    var passwordError = "";

    if (!this.state.email) {
      emailError = "Email can't be empty";
    }

    if (!this.state.password) {
      passwordError = "Password can't be empty";
    } else if (this.state.password.length < 8) {
      passwordError = "Password should be at least 8 characters";
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      e.preventDefault();
    } else {
      alert(JSON.stringify(this.state));
    }
  }

  render() {
    return (
      <Container>
        <ContentContainer>
          <Title>{"Sign In"}</Title>

          <Form onSubmit={this.handleSubmit}>
            <Label>Email</Label>
            <EmailInput
              type="email"
              value={this.state.email}
              onChange={this.handleEmailInputChange}
            />

            {this.state.emailError && (
              <ErrorLabel>{this.state.emailError}</ErrorLabel>
            )}

            <Label>Password</Label>
            <PasswordInput
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordInputChange}
            />

            {this.state.passwordError && (
              <ErrorLabel>{this.state.passwordError}</ErrorLabel>
            )}

            <CheckboxContainer>
              <RememberMeCheckbox
                type="checkbox"
                checked={this.state.rememberMe}
                onChange={this.handleRememberMeInputChange}
              />
              <CheckboxLabel>Remember me</CheckboxLabel>
            </CheckboxContainer>

            <SubmitButton type="submit" />
          </Form>
        </ContentContainer>
      </Container>
    );
  }
}

export default SignInComponent;
