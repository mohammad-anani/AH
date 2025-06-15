import { cloneElement, createContext, useContext, useState } from "react";
import type {
  ChildrenProps,
  ClickableChildrenProps,
  Setter,
} from "../utils/types";

type ToggleContextType = {
  enabled: boolean;
  setEnabled: Setter<boolean>;
};

const ToggleContext = createContext<ToggleContextType>({
  enabled: false,
  setEnabled: () => {},
});

export default function Toggle({
  children,
  isOn = false,
}: ChildrenProps & { isOn?: boolean }) {
  const [enabled, setEnabled] = useState(isOn);
  return (
    <ToggleContext.Provider value={{ enabled, setEnabled }}>
      {children}
    </ToggleContext.Provider>
  );
}

function ToggledToggler({ children }: ClickableChildrenProps) {
  const { enabled, setEnabled } = useContext(ToggleContext);

  return enabled
    ? cloneElement(children, {
        onClick: () => {
          setEnabled(false);
        },
      })
    : null;
}

function UntoggledToggler({ children }: ClickableChildrenProps) {
  const { enabled, setEnabled } = useContext(ToggleContext);

  return !enabled
    ? cloneElement(children, {
        onClick: () => {
          setEnabled(true);
        },
      })
    : null;
}

function ToggledUI({ children }: ChildrenProps) {
  const { enabled } = useContext(ToggleContext);

  return enabled ? <>{children}</> : null;
}

function UntoggledUI({ children }: ChildrenProps) {
  const { enabled } = useContext(ToggleContext);

  return !enabled ? <>{children}</> : null;
}

Toggle.Disabler = ToggledToggler;
Toggle.Enabler = UntoggledToggler;
Toggle.OnUI = ToggledUI;
Toggle.OffUI = UntoggledUI;
