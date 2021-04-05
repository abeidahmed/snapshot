FactoryBot.define do
  factory :user do
    full_name { "John Doe" }
    sequence(:email) { |n| "johndoe#{n}@example.com" }
    password { "secretpassword" }
  end
end
