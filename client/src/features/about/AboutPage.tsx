import {
  ButtonGroup,
  Button,
  Container,
  Alert,
  AlertTitle,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import agent from "../../app/api/agent";

export default function AboutPage() {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  function getValidationError() {
    agent.testErrors
      .getValidationError()
      .then(() => console.log("should not see this"))
      .catch((error) => setValidationErrors(error));
  }

  return (
    <Container>
      <ButtonGroup fullWidth variant="contained">
        <Button onClick={() => agent.testErrors.get400Error()}>
          Test 400 Errors
        </Button>
        <Button onClick={() => agent.testErrors.get401Error()}>
          Test 401 Errors
        </Button>
        <Button onClick={() => agent.testErrors.get404Error()}>
          Test 404 Errors
        </Button>
        <Button onClick={() => agent.testErrors.get500Error()}>
          Test 500 Errors
        </Button>
        <Button onClick={()=> getValidationError()}>
          Test Validate Error
        </Button>
      </ButtonGroup>
      {validationErrors.length > 0 && (
        <Alert severity="error">
          <AlertTitle>Validation Errors</AlertTitle>
          <List>
            {validationErrors.map((error) => (
              <ListItem key={error}>
                <ListItemText>{error}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Alert>
      )}
    </Container>
  );
}
