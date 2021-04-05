require "rails_helper"

RSpec.describe User, type: :model do
  subject(:user) { build(:user) }

  describe "validations" do
    it { is_expected.to have_secure_password }

    it { is_expected.to validate_presence_of(:email) }

    it { is_expected.to validate_uniqueness_of(:email).case_insensitive }

    it { is_expected.to validate_length_of(:email).is_at_most(255) }

    it { is_expected.to allow_value("johndoe@example.com", "johjn@exa.co.in").for(:email) }

    it { is_expected.not_to allow_value("johndoeexample.com", "johjn@exa").for(:email) }

    it { is_expected.to validate_presence_of(:full_name) }

    it { is_expected.to validate_length_of(:full_name).is_at_most(255) }

    it { is_expected.to validate_length_of(:password).is_at_least(6) }
  end

  describe "callbacks" do
    it "lowercases email before saving" do
      email = "hello@example.com"
      user.email = email.upcase
      user.save!

      expect(user.email).to eq(email)
    end

    it "strips the email before validation" do
      email = "   hello@example.com "
      user.email = email
      user.save!

      expect(user.email).to eq("hello@example.com")
    end
  end
end
