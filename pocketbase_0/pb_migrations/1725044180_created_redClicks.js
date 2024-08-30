/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "boacpy03vedu7er",
    "created": "2024-08-30 18:56:20.161Z",
    "updated": "2024-08-30 18:56:20.161Z",
    "name": "redClicks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fvepgtlo",
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
  const collection = dao.findCollectionByNameOrId("boacpy03vedu7er");

  return dao.deleteCollection(collection);
})
