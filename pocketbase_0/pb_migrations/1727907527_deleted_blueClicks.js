/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xyuxenkr3hotzxh");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "xyuxenkr3hotzxh",
    "created": "2024-08-30 18:57:47.703Z",
    "updated": "2024-08-30 19:10:11.796Z",
    "name": "blueClicks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vsjffdir",
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
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
