class Api::V1::SnapshotsController < ApplicationController
  def create
    authorize Snapshot.new

    snapshot = current_user.snapshots.build(snapshot_new_params)
    if snapshot.save
      # do
    else
      render json: { errors: snapshot.errors }, status: :unprocessable_entity
    end
  end

  private

  def snapshot_new_params
    params.require(:snapshot).permit(:url, :visibility, tag_names: [])
  end
end
