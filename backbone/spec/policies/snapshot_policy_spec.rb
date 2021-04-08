require "rails_helper"

RSpec.describe SnapshotPolicy, type: :policy do
  subject { described_class.new(user, snapshot) }

  context "when being a guest" do
    let(:user) { nil }
    let(:snapshot) { create(:snapshot) }

    it { is_expected.to forbid_actions(%i[create]) }
  end

  context "when being a logged in user" do
    let(:user) { create(:user) }
    let(:snapshot) { create(:snapshot) }

    it { is_expected.to permit_actions(%i[create]) }
  end
end
