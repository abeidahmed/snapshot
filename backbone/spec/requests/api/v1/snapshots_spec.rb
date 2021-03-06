require "rails_helper"

RSpec.describe "Api::V1::Snapshots", type: :request do
  describe "#create" do
    context "when the request is valid" do
      it "creates the snapshot" do
        user = create(:user)
        post \
          api_v1_snapshots_path,
          params: { snapshot: { url: "https://google.com", visibility: "listed" } }.to_json,
          headers: auth_header(user)

        expect(user.snapshots.count).to eq(1)
      end

      xit "can be tagged without any tag duplication" do
        user = create(:user)
        post \
          api_v1_snapshots_path,
          params: { snapshot: { url: "https://google.com" } }.to_json,
          headers: auth_header(user)

        expect(Tag.all.map(&:name)).to match_array(%w[foo bar Bar])
        expect(Snapshot.first.tags.map(&:name)).to match_array(%w[foo bar Bar])
      end
    end

    it "returns error if snapshot is invalid" do
      user = create(:user)
      post \
        api_v1_snapshots_path,
        params: { snapshot: { url: "" } }.to_json,
        headers: auth_header(user)

      expect(json.dig(:errors, :url)).to be_present
    end
  end
end
