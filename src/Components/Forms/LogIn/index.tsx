import { Formik } from "formik";
import { ILogInUser } from "../../../@Types/Validation";
import LogInSchema from "../../../Helpers/Validation/LoginSchema";
import Button from "../../Elements/Buttons";
import Typography from "../../Typography";
import { FlexInput } from "../Fields/inputField.style";
import LoginForm from "./LoginForm";
import { FormContainer } from "./styles";

const Index = () => {
  const LoginInitialValues: ILogInUser = {
    userEmail: "",
    password: "",
    isRememberMe: false,
  };
  return (
    <FormContainer>
      <Typography style={{fontWeight: 'bold'}} variant="h2">Login.</Typography>
      <Typography variant="h6" style={{marginBottom: '15px'}}>
        Login with your data that you entered during registration
      </Typography>
      <Formik
        initialValues={LoginInitialValues}
        validationSchema={LogInSchema}
        onSubmit={() => console.log("Login Form Submited :)")}
        children={LoginForm}
      />
      <div style={{textAlign: 'center',
        marginTop: '80px'
    }}>
      <Button
        border="1px solid #FCDD06" 
        color="black"
        width="60%"
        padding="15px 10px"
    
      > 
        Sign Up Now
      </Button>
      </div>
    </FormContainer>
  );
};

export default Index;
