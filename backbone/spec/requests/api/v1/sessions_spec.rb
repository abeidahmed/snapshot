require "rails_helper"

RSpec.describe "Api::V1::Sessions", type: :request do
  describe "#create" do
    it "throws error if request is invalid" do
      post api_v1_sessions_path, params: { session: { email: "", password: "secret" } }

      expect(json.dig(:errors, :invalid)).to be_present
    end
  end
end
