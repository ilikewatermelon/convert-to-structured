# convert-to-structured
Convert regular JSON to Transifex's STRUCURED_JSON so it allows developers to add string metadata such as context, comments,
and character limit for translation and localization. 

Example: 

   "parent_key":{
      "child_key":{
         "string":"This is a key from a child",
         "context":"Noun",
         "developer_comment":"This is a comment.",
         "character_limit":150
      }
   }

More details about Transifex STRUCTURED_JSON: https://docs.transifex.com/formats/json/structured-json 

Note that only "string" is the required key, so this repo adds the "string" key in the conversion only. 

There is one sample.JSON, you can provide its path as the process.argv[2] argument and get the STRUCTURED_JSON output. 


