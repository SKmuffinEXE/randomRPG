class EnemySerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :str, :int, :dex, :speed, :con, :wis, :gold, :level
end
