import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import classes from "./SummaryForm.module.css";

export default function SummaryForm() {
  const [termsAndConditionsChecked, SetTermsAndConditionsChecked] =
    useState(false);

  const checkboxLabel = (
    <span>
      I agree to <span className={classes.blue}>Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={termsAndConditionsChecked}
          onChange={(e) => SetTermsAndConditionsChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        disabled={!termsAndConditionsChecked}
      >
        Confirm order
      </Button>
    </Form>
  );
}
