class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :heal, :poisonheal, :damage
end
