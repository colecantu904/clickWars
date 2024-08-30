/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "srqenyt5y8w017b",
    "created": "2024-08-30 19:26:06.674Z",
    "updated": "2024-08-30 19:26:06.674Z",
    "name": "totalClicks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dblajvzg",
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
        "id": "zar65yoc",
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
  const collection = dao.findCollectionByNameOrId("srqenyt5y8w017b");

  return dao.deleteCollection(collection);
})
