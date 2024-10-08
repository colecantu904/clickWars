/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qery918kumaxh4p");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "qery918kumaxh4p",
    "created": "2024-10-02 22:19:24.048Z",
    "updated": "2024-10-02 22:25:44.552Z",
    "name": "Total_Clicks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4hlrvf3v",
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
    "updateRule": "",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
