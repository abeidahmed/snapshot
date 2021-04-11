require "rails_helper"

RSpec.describe Tag, type: :model do
  describe "validations" do
    it { is_expected.to validate_presence_of(:name) }

    it { is_expected.to validate_uniqueness_of(:name).case_insensitive }

    it { is_expected.to validate_length_of(:name).is_at_most(72) }
  end
end
