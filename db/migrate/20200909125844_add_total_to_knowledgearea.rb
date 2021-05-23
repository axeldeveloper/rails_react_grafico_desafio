class AddTotalToKnowledgearea < ActiveRecord::Migration[5.2]
  def change
    add_column :knowledge_areas, :total, :integer
  end
end
