require "rails_helper"

RSpec.describe "Api::V1::Sessions", type: :request do
  describe "#create" do
    it "sends user object if request is valid" do
      user = create(:user)
      post api_v1_sessions_path, params: { session: { email: user.email, password: user.password } }

      expect(json[:user].keys).to match_array(%i[email full_name id])
    end

    it "throws error if request is invalid" do
      post api_v1_sessions_path, params: { session: { email: "", password: "secret" } }

      expect(json.dig(:errors, :invalid)).to be_present
    end
  end
end
