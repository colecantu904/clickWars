/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ssrbmr87dmeyxgz",
    "created": "2024-08-30 19:44:47.792Z",
    "updated": "2024-08-30 19:44:47.792Z",
    "name": "totalClicks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ikuer4x3",
        "name": "field",
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
  const collection = dao.findCollectionByNameOrId("ssrbmr87dmeyxgz");

  return dao.deleteCollection(collection);
})
