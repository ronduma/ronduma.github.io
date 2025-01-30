import Timeline from "@mui/lab/Timeline";

// custom components
import TimelineObject from "./TimelineObject";

export default function ExperienceTimeline() {
  return (
    <Timeline>
      <TimelineObject
        company="Deloitte Consulting"
        title="Software Engineer"
        date="June 2024 - Present"
        img="/imgs/deloitte.png"
        imgHeight="2.5rem"
        description="Currently developing several full-stack applications for an AI research and development team in the Government & Public Services (GPS) sector."
      />
      <TimelineObject
        company="Jasmin"
        title="Lead Developer"
        date="September 2023 - May 2024"
        img="/imgs/jasmin.png"
        imgHeight="4rem"
        description="Designed and developed a virtual mental health therapy application for a client as my senior capstone project, enhancing access to mental health support for people in Ukraine."
      />
      <TimelineObject
        company="America On Tech"
        title="Data Science Fellow"
        date="September 2023 - December 2023"
        img="/imgs/aot.png"
        imgHeight="4rem"
        description="Participated in a 10-week data science fellowship program, where I learned machine learning and data science concepts from industry professionals at GSK and NBCU, and applied them to real-world scenarios."
      />
      <TimelineObject
        company="Deloitte Consulting"
        title="Software Engineering Intern"
        date="June 2023 - August 2023"
        img="/imgs/deloitte.png"
        imgHeight="2.5rem"
        description="Collaborated with software and data engineering teams on the development of an AWS-based application for a state government healthcare client that detects activities suggesting healthcare provider fraud, waste, and abuse"
      />
      <TimelineObject
        company="Federal Reserve Bank of New York"
        title="Software Engineering Intern"
        date="June 2022 - August 2022"
        img="/imgs/fed.png"
        imgHeight="5rem"
        description="Developed several microservice applications for the bank's Enterprise Architecture team, which were used to monitor and manage the bank's internal APIs and services in a more efficient manner."
      />
    </Timeline>
  );
}
