/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "l5z99aiwg8pjeek",
    "created": "2024-08-31 19:30:14.455Z",
    "updated": "2024-08-31 19:30:14.455Z",
    "name": "redClicks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nn1v7ryq",
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
  const collection = dao.findCollectionByNameOrId("l5z99aiwg8pjeek");

  return dao.deleteCollection(collection);
})
