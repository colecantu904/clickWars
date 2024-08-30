/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sxjulh8qgevudoq",
    "created": "2024-08-30 19:23:27.058Z",
    "updated": "2024-08-30 19:23:27.058Z",
    "name": "totalClicks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0tzxdyyt",
        "name": "blueClicks",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "apjfyssl",
        "name": "redClicks",
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
  const collection = dao.findCollectionByNameOrId("sxjulh8qgevudoq");

  return dao.deleteCollection(collection);
})
