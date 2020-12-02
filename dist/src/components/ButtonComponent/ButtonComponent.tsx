import React from "react";

import Button from "@material-ui/core/Button";



export interface props {

  label?: string;

  size?: "small" | "medium" | "large";

  variant?: "contained" | "outlined";

  color?: "primary" | "secondary";

  onClick?: () => void;

  children: React.ReactNode;

}



export default function ButtonComp({ children, ...rest }: props) {

  return (

    <Button className="button" {...rest}>

      {children}

    </Button>

  );

}



ButtonComp.defaultProps = {

  onClick: () => {

    console.log("pressed the button");

  },

  size: "medium",

  variant: "contained",

  color: "primary",

  children: "Button",

};

