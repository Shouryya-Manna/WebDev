import BlogCard from "./components/BlogCard";
import image from "./assets/bird.jpg";
import ChoiceBox from "./components/ChoiceBox";
function App() {
  const choiceItemsData = [
    {
      id: 1,
      title: "Comprehensive Site Assessment",
      description:
        "A detailed on-site evaluation identifying potential safety hazards and compliance risks within your facility.",
    },
    {
      id: 2,
      title: "Asbestos Material Testing",
      description:
        "Laboratory analysis of collected samples to determine the presence and concentration of asbestos fibers.",
    },
    {
      id: 3,
      title: "Digital Inspection Reporting",
      description:
        "Automated and cloud-based reporting system for real-time data sharing, photo evidence, and compliance tracking.",
    },
    {
      id: 4,
      title: "Regulatory Compliance Support",
      description:
        "Expert guidance to help your organization meet local, national, and international asbestos safety regulations.",
    },
    {
      id: 5,
      title: "Post-Remediation Verification",
      description:
        "Final clearance inspections ensuring the environment is safe and fully compliant before reoccupation or renovation.",
    },
  ];

  return (
    <>
      {/* <div className="min-h-screen flex justify-center items-center">
        <BlogCard
          blog={{
            id: 1,
            image: image,
            title: "Birds",
            description: "Hello Birds 123",
          }}
        >
          <BlogCard.Image />
          <BlogCard.Title />
          <BlogCard.Description />
        </BlogCard>
      </div> */}

      <ChoiceBox items={choiceItemsData}>
        <ChoiceBox.Content>
          <ChoiceBox.Checkbox/>
          <ChoiceBox.Title />
          <ChoiceBox.Description/>
        </ChoiceBox.Content>
      </ChoiceBox>
    </>
  );
}

export default App;
