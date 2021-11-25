class EnemySerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :maxhp, :maxmp, :str, :int, :dex, :speed, :con, :wis, :gold, :level, :xp
end
