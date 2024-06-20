# ReactFormQuick

**ReactFormQuick** is a powerful and easy-to-use React library designed to simplify the creation and management of forms. It reduces the amount of code required for handling state management and validations for input fields such as name, email, phone number, date, and description and more. With this library, you just need to import the package and configure your form fields, and it will take care of the rest.

## Features

- **Easy Integration**: Quickly integrate into your React forms.
- **Automatic Validation**: Handles field validations with minimal configuration.
- **Customizable**: Easily customize labels, validation messages, and styles.
- **Lightweight**: No additional dependencies required.

## Installation

To install ReactFormQuick, use npm or yarn:

```bash
npm install react-form-quick
```

or

```bash
yarn add react-form-quick
```

## Quickstart

Here is a basic example of how to use ReactFormQuick in your project:

### Importing the Package

```javascript
import React from "react";
import { Form, INPUT_TYPES } from "react-form-quick";
```

### Example Form Component

```javascript
function App() {
  return (
    <Form
      inputTypes={[
        INPUT_TYPES.NAME,
        INPUT_TYPES.EMAIL,
        INPUT_TYPES.MOBILE,
        INPUT_TYPES.DESCRIPTION,
      ]}
      labels={["Name", "Email", "Phone", "Description"]}
      title="Login"
      onSubmit={(data) => {
        console.log(data);
      }}
      variant="primary"
      btnLabel="Sign In"
    />
  );
}

export default App;
```

## API

### `Form` Component

- `inputTypes` (Array): Defines the types of inputs in the form. Available types are `INPUT_TYPES.NAME`, `INPUT_TYPES.EMAIL`, `INPUT_TYPES.MOBILE`, `INPUT_TYPES.DATE` and more.
- `labels` (Array): Sets the labels for each input field.
- `title` (String): The title of the form.
- `onSubmit` (Function): Callback function that handles form submission. Receives form data as an argument.
- `variant` (String): Specifies the form's style variant. For example, "primary", "secondary", "default".
- `btnLabel` (String): Text to show on button.

### `INPUT_TYPES`

The `INPUT_TYPES` object provides constants for the different input types available:

- `INPUT_TYPES.NAME`: Text input for names.
- `INPUT_TYPES.EMAIL`: Email input.
- `INPUT_TYPES.MOBILE`: Mobile phone number input.
- `INPUT_TYPES.DATE`: Date input.
- `INPUT_TYPES.DESCRIPTION`: Text area for descriptions.
  and more...

---

With **ReactFormQuick**, you can effortlessly manage form creation and validation, allowing you to focus on building great user experiences.
