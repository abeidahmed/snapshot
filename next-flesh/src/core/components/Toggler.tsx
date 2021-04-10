import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

interface TogglerProps {
  children: (
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
  ) => JSX.Element;
  closeOnOutsideClick?: boolean;
}

const Toggler: React.FC<TogglerProps> = ({
  children,
  closeOnOutsideClick = true,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  let actionFunction: () => void;

  if (closeOnOutsideClick) {
    actionFunction = () => setIsActive(false);
  } else {
    actionFunction = () => {};
  }

  return (
    <OutsideClickHandler onOutsideClick={actionFunction}>
      {children(isActive, setIsActive)}
    </OutsideClickHandler>
  );
};

export default Toggler;
