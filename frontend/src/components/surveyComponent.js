import { Model, StylesManager, Survey } from "survey-react";
import "survey-react/modern.min.css";
StylesManager.applyTheme("modern");

const surveyJson = {
  title: "This is survey demo with a progress bar",
  logoPosition: "right",
  pages: [
    {
      name: "Personal info",
      elements: [
        {
          type: "text",
          name: "question1",
          title: "What is your full name?",
          isRequired: true,
        },
        {
          type: "boolean",
          name: "question3",
          title: "Are you single?",
          isRequired: true,
        },
      ],
      title: "Your personal information",
      description: "Complete the information required",
    },
    {
      name: "Preferences",
      elements: [
        {
          type: "radiogroup",
          name: "question2",
          title: "Which do you prefer?",
          isRequired: true,
          choices: [
            {
              value: "item1",
              text: "Bread",
            },
            {
              value: "item2",
              text: "Chips",
            },
            {
              value: "item3",
              text: "Cookies",
            },
          ],
        },
        {
          type: "imagepicker",
          name: "question4",
          title: "What is your favorite animal?",
          choices: [
            {
              value: "lion",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "giraffe",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "panda",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "camel",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
        },
      ],
      title: "Your preferences",
      description: "Select the one answer ",
    },
    {
      name: "Almost Done",
      elements: [
        {
          type: "image",
          name: "seventh_image",
          width: "600",
          minWidth: "600",
          maxWidth: "600",
          imageLink: "/Content/Images/examples/covid/07.png",
          imageHeight: 441,
          imageWidth: 500,
        },
        {
          type: "panel",
          name: "status_of_form_completion_panel",
          elements: [
            {
              type: "boolean",
              name: "status_of_form_completion_boolean",
              title: "Form completed",
              isRequired: true,
              labelTrue: "Yes",
              labelFalse: "No or partially",
            },
            {
              type: "radiogroup",
              name: "status_of_form_completion_radio",
              visible: false,
              visibleIf: "{status_of_form_completion_boolean} = false",
              title: "Reason:",
              choices: [
                {
                  value: "item1",
                  text: "Missed",
                },
                {
                  value: "item2",
                  text: "Not attempted",
                },
                {
                  value: "item3",
                  text: "Not performed",
                },
                {
                  value: "item4",
                  text: "Refusal",
                },
              ],
              hasOther: true,
              otherText: "Other, specific:",
            },
          ],
          title: "Status of form completion",
          startWithNewLine: false,
          showNumber: true,
          showQuestionNumbers: "off",
        },
      ],
      title: "About to finish the survey",
    },
  ],
  showProgressBar: "top",
  progressBarType: "buttons",
};

const Surveyy = () => {
  const survey = new Model(surveyJson);
  return <Survey model={survey} />;
};

export default Surveyy;

// Sources
// https://surveyjs.io/Documentation/Library?id=get-started-react#install-the-survey-react-npm-package
// https://surveyjs.io/create-survey
// https://surveyjs.io/Examples/Survey-Creator?id=real-income&platform=ReactjsV2&theme=modern#content-js
// https://surveyjs.io/Documentation/Library?id=get-started-react#install-the-survey-react-npm-package
// https://surveyjs.io/create-survey
// https://www.digitalocean.com/community/tutorials/how-to-handle-async-data-loading-lazy-loading-and-code-splitting-with-react
// https://www.digitalocean.com/community/tutorials/react-components-viewport-react-visibility-sensor
// https://blog.bitsrc.io/lazy-loading-react-components-with-react-lazy-and-suspense-f05c4cfde10c
// https://www.000webhost.com/cpanel-login?from=panel
// https://hanabitours-test.000webhostapp.com/wp-admin
