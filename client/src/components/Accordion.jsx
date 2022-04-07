import React from "react";
import classes from "./Accordion.module.css";
import { useState } from "react";
import { AiOutlinePlus } from 'react-icons/ai'

function Accordion(props) {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className={classes.container}>
      <div className={classes.question} onClick= {() => toggle(props.index)}>
        <h1>{props.faq.question}</h1>
        <AiOutlinePlus className={selected === props.index ? `${classes.plusIcon} ${classes.xIcon}` : classes.plusIcon}/>
      </div>
      <div className={selected === props.index ? `${classes.content} ${classes.show}` : classes.content}>
        <p>{props.faq.answer}</p>
      </div>
      
    </div>
  );
}

export default Accordion;
