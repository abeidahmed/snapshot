import Icon from "core/components/Icons";

interface FocusedProps {
  title: string;
  container?: boolean;
  children: React.ReactNode;
}

const Focused: React.FC<FocusedProps> = ({
  title,
  container = true,
  children,
}) => {
  return (
    <main className="flex items-center justify-center min-h-screen py-12 bg-gray-100 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="px-4">
          <Icon
            icon="logo"
            viewBox="0 0 76 19"
            className="h-6 w-auto mx-auto text-gray-700"
          />
          <h1 className="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
            {title}
          </h1>
        </div>
        <div className="w-full sm:max-w-md mx-auto">
          {container ? (
            <div className="px-10 py-8 mt-8 bg-white shadow sm:rounded-md">
              {children}
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </main>
  );
};

export default Focused;
