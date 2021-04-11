class SnapshotSerializer < ApplicationSerializer
  attributes :id, :title, :description, :image_url, :url, :visibility, :user

  has_many :tags

  def user
    {
      id: object.user.id,
      full_name: object.user.full_name
    }
  end
end
