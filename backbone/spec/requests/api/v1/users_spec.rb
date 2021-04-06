require "rails_helper"

RSpec.describe "Api::V1::Users", type: :request do
  describe "#create" do
    it "creates the user if request is valid" do
      post api_v1_users_path, params: { user: { full_name: "John", email: "hey@hey.com", password: "secretpass" } }

      expect(User.count).to eq(1)
    end

    it "throws error if request is invalid" do
      post api_v1_users_path, params: { user: { full_name: "", email: "", password: "secretpass" } }

      expect(json).to eq("user")
    end
  end
end
