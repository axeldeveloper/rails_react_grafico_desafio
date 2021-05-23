class CreateKnowledgeAreas < ActiveRecord::Migration[5.2]
  def change
    create_table :knowledge_areas do |t|
      t.string :title
      t.references :metter, foreign_key: true

      t.timestamps
    end
  end
end
