define({ "api": [
  {
    "type": "post",
    "url": "/add",
    "title": "Send new data",
    "name": "AddReadings",
    "group": "Add_readings",
    "description": "<p>https://github.com/DaKaZ/esp8266-restclient/blob/master/RestClient.h#L40</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "celcius",
            "description": "<p>Tempreature in celcius degrees.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "light",
            "description": "<p>Light intensity.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "HTTP/1.1 POST\n{\n    \"celcius\": 12.345,\n    \"light\": 34.567,\n}",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadBodyFormat",
            "description": "<p>Invalid data sent.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Bad body format\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./docs.js",
    "groupTitle": "Add_readings"
  },
  {
    "type": "get",
    "url": "/data/all",
    "title": "Get all data.",
    "name": "GetAllReadings",
    "group": "Read_readings",
    "description": "<p>Dates are stored as <a href=\"https://tools.ietf.org/html/rfc3339#section-5.6\">RFC 3339 date-time</a></p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "readings",
            "description": "<p>Array of readings.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    [\n\t\t{\n\t\t\t\"date\": \"1980-12-31T23:59:59+01:00\",\n\t\t\t\"celcius\": \"23.1234\"\n\t\t},\n\t\t{\n\t\t\t\"date\": \"1981-12-31T23:59:59+01:00\",\n\t\t\t\"celcius\": \"12.3456\"\n\t\t}\n\t   ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./docs.js",
    "groupTitle": "Read_readings"
  },
  {
    "type": "get",
    "url": "/data/all.csv",
    "title": "Get csv with all data",
    "name": "GetCsvReadings",
    "group": "Read_readings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tempreature",
            "description": "<p>Tempreature in celcius degrees.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    \"id\",\"celcius_tempreature\",\"light_intensity\",\"created_at\"\n\t\t1,12.1,23,\"2018-12-11T21:49:02+01:00\"\n\t\t2,12.1,23,\"2018-12-11T22:12:05+01:00\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BADFORMAT",
            "description": "<p>Invalid data sent.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Bad body format\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./docs.js",
    "groupTitle": "Read_readings"
  },
  {
    "type": "get",
    "url": "/data/latest/:number",
    "title": "Latest data",
    "name": "GetLatestReadings",
    "group": "Read_readings",
    "description": "<p>You can <code>GET</code> on <code>/data/latest</code> for default (500 newest). Dates are stored as <a href=\"https://tools.ietf.org/html/rfc3339#section-5.6\">RFC 3339 date-time</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "number",
            "description": "<p>Number of values to read.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "readings",
            "description": "<p>Array of readings.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    [\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"date\": \"1980-12-31T23:59:59+01:00\",\n\t\t\t\"celcius\": 23.1234,\n\t\t\t\"light\": 45.678\n\t\t},\n\t\t{\n\t\t\t\"id\": 2,\n\t\t\t\"date\": \"1981-12-31T23:59:59+01:00\",\n\t\t\t\"celcius\": 12.3456\n\t\t\t\"light\": 87.654\n\t\t}\n\t   ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./docs.js",
    "groupTitle": "Read_readings"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "_home_kuba_programowanie_artermo_docs_main_js",
    "groupTitle": "_home_kuba_programowanie_artermo_docs_main_js",
    "name": ""
  }
] });
