FactoryBot.define do
  factory :tag do
    name { "Design" }
    association :taggable, factory: :snapshot
  end
end
