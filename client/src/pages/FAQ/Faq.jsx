import React from "react";
import Navbar from "../../components/Navbar";
import Accordion from "../../components/Accordion";
import classes from "./Faq.module.css";

const faqs = [
  {
    question: "What does Bragility offer?",
    answer:
      "Intility includes an end-to-end operations and support service: from local infrastructure and clients to business-critical systems and cloud services",
  },
  {
    question: "Why should I choose Bragility?",
    answer:
      "Employees that are satisfied with their IT workday is a prerequisite for everything from productivity and efficiency, to innovation and companies’ ability to retain talent. Intility’s platform service puts the user at the center and includes a modern, secure and fully managed digital workplace, delivered as a service.",
  },
  {
    question: "I have a techinal issue, how do I fix it?",
    answer:
      "Please contact out customer support so we can resolve the issue.",
  },
  {
    question: "I forgot my password, how do I reset it?",
    answer:
      "Upon logging in, you can click \"I forgot my password\". You can also contact our support, and we will reset it for you.",
  },
];

function Faq() {
  return (
    <div>
      <Navbar class="blueBackground" />
      <h1 className={classes.faqHeader}>Frequently Asked Questions</h1>
      <div className={classes.faq}>
        {faqs.map((faq, i) => (
          <Accordion faq={faq} index={i} />
        ))}
      </div>
    </div>
  );
}

export default Faq;
