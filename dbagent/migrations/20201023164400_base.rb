Sequel.migration do
  up do
    run <<-SQL
    CREATE TABLE ingredients (
      id serial PRIMARY KEY,
      name VARCHAR (100) UNIQUE NOT NULL
    );

    CREATE TABLE recipes (
      id serial PRIMARY KEY,
      name VARCHAR (100) UNIQUE NOT NULL,
      description TEXT NULL
    );

    CREATE TABLE recipes_ingredients (
      recipe_id INTEGER REFERENCES recipes (id),
      ingredient_id INTEGER REFERENCES ingredients (id),
      PRIMARY KEY(recipe_id, ingredient_id)
    );

    SQL
  end
end
