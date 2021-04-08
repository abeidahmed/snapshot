class SnapshotPolicy < ApplicationPolicy
  def create?
    user
  end
end
