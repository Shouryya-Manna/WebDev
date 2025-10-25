
import Form, {
  FormContent,
  FormField,
  FormFieldInput,
  FormFieldLabel,
  FormHeader,
  FormHeaderDescription,
  FormHeaderTitle,
  FormStep,
} from "./components/Form";

function App() {
  const formdata = [
  {
    id: 1,
    formName: "User Registration Form",
    formDescription: "Form to collect basic user details for registration.",
    form: {
      fields: [
        {
          id: 1,
          label: "Full Name",
          name: "fullName",
          inputType: "text",
          placeholder: "Enter your full name",
        },
        {
          id: 2,
          label: "Email Address",
          name: "email",
          inputType: "text",
          placeholder: "Enter your email address",
        },
        {
          id: 3,
          label: "Profile Picture",
          name: "profilePic",
          inputType: "image",
          placeholder: "Upload your profile picture",
        },
        {
          id: 4,
          label: "Date of Birth",
          name: "dob",
          inputType: "text",
          placeholder: "Enter your date of birth (DD/MM/YYYY)",
        },
      ],
    },
  },
  {
    id: 2,
    formName: "Feedback Form",
    formDescription:
      "Form for collecting feedback from users about our service.",
    form: {
      fields: [
        {
          id: 1,
          label: "Email",
          name: "email",
          inputType: "text",
          placeholder: "Enter your email address",
        },
        {
          id: 2,
          label: "Rating (1-5)",
          name: "rating",
          inputType: "text",
          placeholder: "Give a rating between 1 and 5",
        },
        {
          id: 3,
          label: "Comments",
          name: "comments",
          inputType: "textarea",
          placeholder: "Write your feedback or suggestions",
        },
      ],
    },
  },
  {
    id: 3,
    formName: "Job Application Form",
    formDescription: "Form to apply for open positions at our company.",
    form: {
      fields: [
        {
          id: 1,
          label: "Full Name",
          name: "applicantName",
          inputType: "text",
          placeholder: "Enter your full name",
        },
        {
          id: 2,
          label: "Email Address",
          name: "applicantEmail",
          inputType: "text",
          placeholder: "Enter your email address",
        },
        {
          id: 3,
          label: "Resume Upload",
          name: "resume",
          inputType: "text",
          placeholder: "Upload your resume (PDF or DOC)",
        },
        {
          id: 4,
          label: "Cover Letter",
          name: "coverLetter",
          inputType: "textarea",
          placeholder: "Write your cover letter here",
        },
      ],
    },
  },
];

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <Form formdata={formdata}>
          {formdata.map((formstep) => {
            return (
              <FormStep
                key={formstep.id}
                id={formstep.id}
                formstepdata={formstep}
              >
                <FormHeader>
                  <FormHeaderTitle />
                  <FormHeaderDescription />
                </FormHeader>
                <FormContent>
                  {formstep.form.fields.map((unitField) => {
                    return (
                      <FormField
                        key={unitField.id}
                        id={unitField.id}
                        name={unitField.name}
                        label={unitField.label}
                        inputType={unitField.inputType}
                        placeholder={unitField.placeholder}
                      >
                        <FormFieldLabel />
                        <FormFieldInput />
                      </FormField>
                    );
                  })}
                </FormContent>
              </FormStep>
            );
          })}
        </Form>
      </div>
    </>
  );
}

export default App;
