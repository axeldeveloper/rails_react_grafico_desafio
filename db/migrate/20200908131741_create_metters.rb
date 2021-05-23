class CreateMetters < ActiveRecord::Migration[5.2]
  def change
    create_table :metters do |t|
      t.string :title
      t.boolean :active

      t.timestamps
    end
  end
end
