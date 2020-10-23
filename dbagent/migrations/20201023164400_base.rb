Sequel.migration do
  up do
    run <<-SQL
    CREATE TABLE ingredients (
      id serial PRIMARY KEY,
      name VARCHAR (50) UNIQUE NOT NULL
    );
    SQL
  end
end
