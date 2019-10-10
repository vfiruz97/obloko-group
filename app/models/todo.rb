class Todo < ApplicationRecord
  belongs_to :project
  validates :text, presence: true,  on: :create
  validates :text, length: { minimum: 2 }, on: :create
  validates :text, length: { maximum: 60 }, on: :create
end
