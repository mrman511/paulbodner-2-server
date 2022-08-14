SELECT projects.title, icons.* FROM projects JOIN
projects_icons ON (projects.id = project_id)
JOIN icons ON (icons.id = icon_id);