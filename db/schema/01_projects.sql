DROP TABLE IF EXISTS projects CASCADE;

CREATE TABLE projects (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(100),
  description TEXT,
  image_path_name VARCHAR(225)
);
