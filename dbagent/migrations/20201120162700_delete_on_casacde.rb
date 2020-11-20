Sequel.migration do
  up do
    run <<-SQL
    ALTER TABLE recipes_ingredients
    DROP CONSTRAINT recipes_ingredients_recipe_id_fkey;

    ALTER TABLE recipes_ingredients
    ADD CONSTRAINT recipes_ingredients_recipe_id_fkey
    FOREIGN KEY (recipe_id)
    REFERENCES recipes (id)
    ON DELETE CASCADE;
    SQL
  end
end
