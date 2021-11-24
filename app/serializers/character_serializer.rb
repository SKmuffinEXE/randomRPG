class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :health, :mhealth, :mana, :mmana, :str, :int, :dex, :speed, :con, :wis, :gold, :level, :points, :killcount
end
