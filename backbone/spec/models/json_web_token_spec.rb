require "rails_helper"

RSpec.describe JsonWebToken do
  it "encodes and decodes the hash passed" do
    user = { id: 1 }
    token = described_class.encode(user)

    expect(described_class.decode(token).first["id"]).to eq(1)
  end

  it "raises an error if the token is active for more than 30 days" do
    user = { id: 1 }
    token = described_class.encode(user)

    Timecop.freeze(31.days.from_now) do
      expect { described_class.decode(token) }.to raise_error(JWT::ExpiredSignature)
    end
  end
end
