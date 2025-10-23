import Form, {
  FormContent,
  FormHeader,
  FormHeaderDescription,
  FormHeaderTitle,
} from "./components/Form";

function App() {
  const formdata = [
    {
      id: 1,
      formName: "User Registration Form",
      formDescription: "Form to collect basic user details for registration.",
      form: {
        fields: [
          { id: 1, label: "Full Name", name: "fullName", inputType: "text" },
          { id: 2, label: "Email Address", name: "email", inputType: "text" },
          {
            id: 3,
            label: "Profile Picture",
            name: "profilePic",
            inputType: "image",
          },
          { id: 4, label: "Date of Birth", name: "dob", inputType: "text" },
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
          { id: 1, label: "Email", name: "email", inputType: "text" },
          { id: 2, label: "Rating (1-5)", name: "rating", inputType: "text" },
          { id: 3, label: "Comments", name: "comments", inputType: "textarea" },
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
          },
          {
            id: 2,
            label: "Email Address",
            name: "applicantEmail",
            inputType: "text",
          },
          { id: 3, label: "Resume Upload", name: "resume", inputType: "text" },
          {
            id: 4,
            label: "Cover Letter",
            name: "coverLetter",
            inputType: "textarea",
          },
        ],
      },
    },
  ];

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <Form formdata={formdata}>
          <FormHeader>
            <FormHeaderTitle />
            <FormHeaderDescription />
          </FormHeader>
          <FormContent>
            
          </FormContent>
        </Form>
      </div>
    </>
  );
}

export default App;
