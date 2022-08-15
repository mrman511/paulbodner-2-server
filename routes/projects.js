const response = require('express');
const router = require('express').Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.query(`
    SELECT projects.* FROM projects;
    `).then(({ rows }) => {
      res.json(rows);
    })
  });

  router.get('/:id', (req, res) => {
    db.query(`
    SELECT icons.* FROM icons JOIN
    projects_icons ON icon_id = icons.id
    WHERE project_id = $1;
    `, [Number(req.params.id)]
    ).then(({ rows }) => {
      res.json(rows);
    })
  })

  return router
}