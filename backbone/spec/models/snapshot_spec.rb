require "rails_helper"

RSpec.describe Snapshot, type: :model do
  subject(:snapshot) { build(:snapshot) }

  describe "associations" do
    it { is_expected.to belong_to(:user) }
  end
end
