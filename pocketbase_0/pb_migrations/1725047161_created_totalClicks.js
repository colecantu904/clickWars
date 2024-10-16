/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rzni6soi9kubp60",
    "created": "2024-08-30 19:46:01.628Z",
    "updated": "2024-08-30 19:46:01.628Z",
    "name": "totalClicks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "n8m0bgma",
        "name": "button_id",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gobhgz56",
        "name": "clicks",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rzni6soi9kubp60");

  return dao.deleteCollection(collection);
})
