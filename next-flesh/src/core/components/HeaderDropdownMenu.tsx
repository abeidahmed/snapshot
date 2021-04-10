import Avatar from "./Avatar";
import Icon from "./Icons";
import Toggler from "./Toggler";

const HeaderDropdownMenu: React.FC = () => {
  return (
    <Toggler>
      {(isActive, setIsActive) => (
        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="no-focus"
              onClick={() => setIsActive(!isActive)}
            >
              <Avatar alt="Abeid Ahmed" />
            </button>
          </div>
          <ul
            className={`${
              isActive ? "block" : "hidden"
            } py-1 mt-2 absolute text-sm origin-top-right right-0 bg-white border rounded-lg shadow-lg w-64`}
          >
            <li>
              <a href="/" className="block py-2 px-3 hover:bg-gray-100">
                <div className="flex items-center space-x-3">
                  <Avatar size="lg" alt="Abeid Ahmed" />
                  <div className="flex-1">
                    <span className="block font-medium">Abeid Ahmed</span>
                    <span className="block text-gray-500">@abeidahmed</span>
                  </div>
                </div>
                <div className="flex items-center mt-3">
                  <Icon icon="user" className="text-gray-400 h-5 w-5" />
                  <span className="leading-5 pl-2 text-gray-700">Profile</span>
                </div>
              </a>
            </li>
            <li>
              <hr className="my-1 border-gray-200" />
            </li>
            <li>
              <a
                href="/"
                className="flex items-center py-2 px-3 hover:bg-gray-100"
              >
                <Icon icon="setting" className="text-gray-400 h-5 w-5" />
                <span className="leading-5 pl-2 text-gray-700">Setting</span>
              </a>
            </li>
            <li>
              <hr className="my-1 border-gray-200" />
            </li>
            <li>
              <a
                href="/"
                className="flex items-center py-2 px-3 hover:bg-gray-100"
              >
                <Icon icon="logout" className="text-gray-400 h-5 w-5" />
                <span className="leading-5 pl-2 text-gray-700">Sign out</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </Toggler>
  );
};

export default HeaderDropdownMenu;
