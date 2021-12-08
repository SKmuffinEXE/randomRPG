class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :heal, :poisonheal, :character_items, :price
end
