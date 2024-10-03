/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rzni6soi9kubp60")

  collection.listRule = ""
  collection.viewRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rzni6soi9kubp60")

  collection.listRule = null
  collection.viewRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
