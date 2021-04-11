import ReactModal from "react-modal";
import Toggler from "core/components/Toggler";
import Icon from "./Icons";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(75, 85, 99, 0.5)",
    zIndex: 1000,
  },
  content: {
    top: "10%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: 8,
    padding: 0,
    transform: "translateX(-50%)",
    border: "none",
    maxHeight: "80vh",
    width: "90%",
    maxWidth: "28rem",
    zIndex: 1001,
  },
};

interface ModalProps {
  title?: string;
  trigger: (
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
  ) => JSX.Element;
  children: (
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
  ) => JSX.Element;
}

const Modal: React.FC<ModalProps> = ({ title, trigger, children }) => {
  return (
    <Toggler closeOnOutsideClick={false}>
      {(isActive, setIsActive) => (
        <>
          {trigger(setIsActive)}
          <ReactModal
            shouldCloseOnEsc
            shouldFocusAfterRender
            style={customStyles}
            isOpen={isActive}
            ariaHideApp={false}
            onRequestClose={() => setIsActive(false)}
          >
            {title && (
              <header className="px-6 py-3 flex items-center justify-between border-b bg-gray-50">
                <h2 className="font-medium">{title}</h2>
                <button
                  type="button"
                  className="no-focus -mr-1 text-gray-700 hover:text-gray-500"
                  onClick={() => setIsActive(false)}
                >
                  <Icon icon="x" className="w-6 h-6" />
                </button>
              </header>
            )}
            <div className="p-6">{children(isActive, setIsActive)}</div>
          </ReactModal>
        </>
      )}
    </Toggler>
  );
};

export default Modal;
