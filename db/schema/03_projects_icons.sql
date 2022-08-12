DROP TABLE IF EXISTS projects_icons CASCADE;

CREATE TABLE projects_icons (
  project_id INTEGER REFERENCES projects(id),
  icon_id INTEGER REFERENCES icons(id)
);