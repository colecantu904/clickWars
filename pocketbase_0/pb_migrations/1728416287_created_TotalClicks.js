/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "atbk7bbn24askaw",
    "created": "2024-10-08 19:38:07.624Z",
    "updated": "2024-10-08 19:38:07.624Z",
    "name": "TotalClicks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "immhl3jg",
        "name": "color_id",
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
        "id": "kcqejx6w",
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
  const collection = dao.findCollectionByNameOrId("atbk7bbn24askaw");

  return dao.deleteCollection(collection);
})
