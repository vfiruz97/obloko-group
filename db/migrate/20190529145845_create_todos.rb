class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.string :text
      t.boolean :is_completed, :default => 'false'
      t.references :project, foreign_key: true

      t.timestamps
    end
  end
end
