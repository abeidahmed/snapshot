require "rails_helper"

RSpec.describe Snapshot, type: :model do
  subject(:snapshot) { build(:snapshot) }

  describe "associations" do
    it { is_expected.to belong_to(:user) }

    it { is_expected.to have_many(:tags) }
  end

  describe "validations" do
    it { is_expected.to validate_presence_of(:url) }

    it do
      expect(snapshot).to allow_value(
        "https://goog.com", "https://www.hello.com", "http://gool.com", "http://www.googl.co.in"
      ).for(:url)
    end

    it { is_expected.not_to allow_value("https://goog", "www.hello.com").for(:url) }

    it do
      expect(snapshot).to allow_value(
        "https://goog.com", "https://www.hello.com", "http://gool.com", "http://www.googl.co.in", ""
      ).for(:image_url)
    end

    it { is_expected.not_to allow_value("https://goog", "www.hello.com").for(:image_url) }

    it { is_expected.to validate_presence_of(:title).on(:update) }

    it { is_expected.to define_enum_for(:visibility).with_values(universal: "universal", listed: "listed").backed_by_column_of_type(:string) } # rubocop:disable Layout/LineLength
  end
end
