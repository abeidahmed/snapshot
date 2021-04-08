class CreateSnapshots < ActiveRecord::Migration[6.1]
  def change
    create_table :snapshots, id: :uuid do |t|
      t.string :url, null: false, default: ""
      t.string :title, null: false, default: ""
      t.text :description
      t.string :image_url
      t.string :visibility, null: false, default: "universal"
      t.references :user, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end

    add_index :snapshots, :visibility
  end
end
