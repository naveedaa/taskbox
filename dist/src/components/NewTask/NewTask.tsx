import React, { FC } from "react";

import Button from "../ButtonComponent/ButtonComponent";

import "./NewTask.css";



export interface PropsType {

  handleSave: () => void;

  handleCancel: () => void;

  inputOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const NewTask: FC<PropsType> = ({

  inputOnChange,

  handleCancel,

  handleSave,

}) => {

  return (

    <div className="newTaskContainer">

      <h2 className="newTaskHeading">Create a New Task</h2>

      <input

        type="text"

        placeholder="Planning something?"

        onChange={

          !!inputOnChange

            ? (e) => {

                inputOnChange!(e);

              }

            : undefined

        }

      />

      <div className="buttonContainer">

        <Button

          variant="contained"

          color="primary"

          size="medium"

          onClick={handleSave}

        >

          Save

        </Button>

        <Button

          variant="contained"

          color="secondary"

          size="medium"

          onClick={handleCancel}

        >

          Cancel

        </Button>

      </div>

    </div>

  );

};



export default NewTask;



NewTask.defaultProps = {

  handleSave: () => {

    console.log("task saved");

  },

  handleCancel: () => {

    console.log("task not saved");

  },

};

