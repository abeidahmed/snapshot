import Header from "core/components/Header";
import Sidebar from "core/components/Sidebar";
import HeaderDropdownMenu from "core/components/HeaderDropdownMenu";
import Snapshot from "snapshot/components/Snapshot";
import SnapshotNewForm from "snapshot/components/SnapshotNewForm";
import Modal from "core/components/Modal";

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto flex">
      <Sidebar />
      <main className="md:grid grid-cols-12 flex-1 min-h-screen">
        <div className="md:col-span-8 lg:col-span-7 border-r">
          <Header />
          <section className="space-y-2 bg-gray-100">
            <Snapshot />
            <Snapshot />
          </section>
        </div>
        <div className="md:col-span-4 lg:col-span-5 pl-6 pr-4 hidden lg:block">
          <div className="py-4 flex items-center justify-end sticky top-0 space-x-5">
            <Modal
              title="Share your snapshot"
              trigger={(setIsActive) => (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setIsActive(true)}
                >
                  Share snapshot
                </button>
              )}
            >
              {() => <SnapshotNewForm />}
            </Modal>
            <HeaderDropdownMenu />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
