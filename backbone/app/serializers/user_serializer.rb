class UserSerializer < ApplicationSerializer
  attributes :id, :full_name, :email
  has_many :snapshots
end
