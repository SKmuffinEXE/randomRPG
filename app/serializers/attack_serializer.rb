class AttackSerializer < ActiveModel::Serializer
  attributes :id, :name, :text, :damage, :poison, :manacost
end
