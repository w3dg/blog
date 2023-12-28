import Container from "./container";
import cn from "classnames";

import { LuArrowRight } from "react-icons/lu";

const Alert = () => {
  return (
    <div className={cn("border-b")}>
      <Container>
        <div className="flex items-center justify-center gap-2 py-2 text-sm font-bold">
          <p>Alert Message here</p>
          <LuArrowRight></LuArrowRight>
        </div>
      </Container>
    </div>
  );
};

export default Alert;
