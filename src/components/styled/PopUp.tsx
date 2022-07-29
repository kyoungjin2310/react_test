import { useState, forwardRef, useImperativeHandle } from "react";
type forwardRefProps = {
  children: JSX.Element;
};

export type forwardRefHandle = {
  open: () => void;
  close: () => void;
};
const Popup = forwardRef<forwardRefHandle, forwardRefProps>((props, ref) => {
  const [Open, setOpen] = useState(false);

  const open = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        open();
      },
      close: () => {
        close();
      },
    };
  });

  return (
    <>
      {Open && (
        <aside className="popup">
          <div className="popupContent">
            {props.children}
            <button className="back" onClick={close}>
              뒤로
            </button>
          </div>
        </aside>
      )}
    </>
  );
});

export default Popup;
