FactoryBot.define do
  factory :snapshot do
    url { "https://google.com" }
    title { "Website title" }
    description { "MyText" }
    image { "https://image.com" }
    visibility { "universal" }
    user

    trait :listed do
      visibility { "listed" }
    end
  end
end
