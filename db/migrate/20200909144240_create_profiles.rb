class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :title
      t.integer :total
      t.references :metter, foreign_key: true

      t.timestamps
    end
  end
end
