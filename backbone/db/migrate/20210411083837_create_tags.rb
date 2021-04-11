class CreateTags < ActiveRecord::Migration[6.1]
  def change
    create_table :tags, id: :uuid do |t|
      t.references :taggable, polymorphic: true, null: false, type: :uuid
      t.string :name, null: false, default: ""

      t.timestamps
    end

    add_index :tags, :name, unique: true
  end
end
