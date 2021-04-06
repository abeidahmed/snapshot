require "rails_helper"

RSpec.describe "Api::V1::Users", type: :request do
  describe "#create" do
    context "when the request is valid" do
      it "creates the user if request is valid" do
        post api_v1_users_path, params: { user: { full_name: "John", email: "hey@hey.com", password: "secretpass" } }

        expect(User.count).to eq(1)
      end

      it "sends the user object" do
        post api_v1_users_path, params: { user: { full_name: "John", email: "hey@hey.com", password: "secretpass" } }

        expect(json[:user].keys).to match_array(%i[token])
      end
    end

    context "when the request is invalid" do
      it "does not create the user" do
        post api_v1_users_path, params: { user: { full_name: "John", email: "", password: "secretpass" } }

        expect(User.count).to eq(0)
      end

      it "throws error" do
        post api_v1_users_path, params: { user: { full_name: "John", email: "", password: "secretpass" } }

        expect(json.dig(:errors, :email)).to be_present
      end
    end
  end
end
