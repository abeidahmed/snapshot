import Icon from "core/components/Icons";
import Avatar from "core/components/Avatar";

const Snapshot: React.FC = () => {
  return (
    <article className="bg-white border-b border-t first:border-t-0">
      <div className="relative pb-image">
        <img
          className="h-full w-full absolute object-cover bg-center bg-no-repeat"
          src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          alt="man holding"
        />
      </div>
      <div className="p-4 flex space-x-3">
        <div className="flex-shrink-0">
          <Avatar alt="Abeid Ahmed" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="text-sm flex items-center space-x-2">
              <h3 className="font-medium text-gray-700">Abeid Ahmed</h3>
              <span>&middot;</span>
              <span className="text-gray-500">1h</span>
            </div>
            <button type="button" className="no-focus text-gray-700">
              <Icon icon="more" className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-2">
            <h2 className="font-semibold text-xl">Dom Event listeners</h2>
            <div className="mt-1 text-xs text-gray-400 flex items-center flex-wrap">
              <span className="inline-flex mr-2">
                #
                <a href="/" className="text-gray-500 hover:text-gray-700">
                  UI/UX
                </a>
              </span>
              <span className="inline-flex mr-2">
                #
                <a href="/" className="text-gray-500 hover:text-gray-700">
                  Design
                </a>
              </span>
            </div>
          </div>
          <footer className="mt-2 -ml-2 flex items-center space-x-8">
            <button
              type="button"
              className="no-focus group flex items-center space-x-1 text-sm text-gray-500 hover:text-yellow-500"
            >
              <span className="group-hover:bg-yellow-100 rounded-full p-2 block transition duration-150 ease-in-out">
                <Icon icon="chat" className="h-5 w-5" />
              </span>
              <span className="transition duration-150 ease-in-out">43</span>
            </button>
            <button
              type="button"
              className="no-focus group flex items-center space-x-1 text-sm text-gray-500 hover:text-pink-500"
            >
              <span className="group-hover:bg-pink-100 rounded-full p-2 block transition duration-150 ease-in-out">
                <Icon icon="heart" className="h-5 w-5" />
              </span>
              <span className="transition duration-150 ease-in-out">21k</span>
            </button>
            <button
              type="button"
              className="no-focus group flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-500"
            >
              <span className="group-hover:bg-blue-100 rounded-full p-2 block transition duration-150 ease-in-out">
                <Icon icon="bookmark" className="h-5 w-5" />
              </span>
              <span className="transition duration-150 ease-in-out">12</span>
            </button>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default Snapshot;
