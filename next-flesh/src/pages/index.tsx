import Header from "core/components/Header";
import Sidebar from "core/components/Sidebar";
import HeaderDropdownMenu from "core/components/HeaderDropdownMenu";

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto flex">
      <Sidebar />
      <main className="md:grid grid-cols-12 flex-1 min-h-screen">
        <div className="col-span-7 border-r">
          <Header />
          <section className="space-y-3 bg-gray-100"></section>
        </div>
        <div className="col-span-5 pl-6 pr-4 hidden lg:block">
          <div className="py-4 flex items-center justify-end sticky top-0 space-x-5">
            <button type="button" className="btn btn-primary">
              Share snapshot
            </button>
            <HeaderDropdownMenu />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
