/**
 * @api {post} /add Send new data
 * @apiName AddReadings
 * @apiGroup Add readings
 * @apiDescription https://github.com/DaKaZ/esp8266-restclient/blob/master/RestClient.h#L40
 *
 * @apiParam {Number} celcius Tempreature in celcius degrees.
 * @apiParam {Number} light Light intensity.
 *
 * @apiSuccess {String} status Status code.
 *
 * @apiExample {curl} Example usage:
 * HTTP/1.1 POST
 * {
 *     "celcius": 12.345,
 *     "light": 34.567,
 * }
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 CREATED
 *     {
 *       "status": "OK"
 *     }
 *
 * @apiError BadBodyFormat Invalid data sent.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Bad body format"
 *     }
 */
/**
 * @api {get} /data/latest/:number Latest data
 * @apiName GetLatestReadings
 * @apiGroup Read readings
 * 
 * @apiDescription You can `GET` on `/data/latest` for default (500 newest). Dates are stored as [RFC 3339 date-time](https://tools.ietf.org/html/rfc3339#section-5.6)
 *
 * @apiParam {Integer} number Number of values to read.
 * 
 * @apiSuccess {Array} readings Array of readings.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 * 		{
 * 			"id": 1,
 * 			"date": "1980-12-31T23:59:59+01:00",
 * 			"celcius": 23.1234,
 * 			"light": 45.678
 * 		},
 * 		{
 * 			"id": 2,
 * 			"date": "1981-12-31T23:59:59+01:00",
 * 			"celcius": 12.3456
 * 			"light": 87.654
 * 		}
 * 	   ]
 *     }
 */
/**
 * @api {get} /data/all Get all data.
 * @apiName GetAllReadings
 * @apiGroup Read readings
 * 
 * @apiDescription Dates are stored as [RFC 3339 date-time](https://tools.ietf.org/html/rfc3339#section-5.6)
 * 
 * @apiSuccess {Array} readings Array of readings.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 * 		{
 * 			"date": "1980-12-31T23:59:59+01:00",
 * 			"celcius": "23.1234"
 * 		},
 * 		{
 * 			"date": "1981-12-31T23:59:59+01:00",
 * 			"celcius": "12.3456"
 * 		}
 * 	   ]
 *     }
 */
/**
 * @api {get} /data/all.csv Get csv with all data
 * @apiName GetCsvReadings
 * @apiGroup Read readings
 *
 * @apiParam {Number} tempreature Tempreature in celcius degrees.
 *
 * @apiSuccess {String} status Status code.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     "id","celcius_tempreature","light_intensity","created_at"
 *		1,12.1,23,"2018-12-11T21:49:02+01:00"
 *		2,12.1,23,"2018-12-11T22:12:05+01:00"
 *
 * @apiError BADFORMAT Invalid data sent.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Bad body format"
 *     }
 */