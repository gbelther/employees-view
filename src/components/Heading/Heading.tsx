import { ReactNode } from "react";

import "./styles.scss";

interface IHeading {
  children: ReactNode;
}

const Heading = ({ children }: IHeading) => {
  return <h1 className="heading-component">{children}</h1>;
};

export default Heading;
