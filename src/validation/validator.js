  const Validator = require('jsonschema').Validator;
  const v = new Validator();
  
  module.exports = {
	  validator: (ctx, instance, schema, trimId=false) => {
			var validated;

			if(trimId)
				delete instance.id;
			try {
				validated = v.validate(instance, schema, {throwError: true});
			} catch (e) {
				ctx.throw(400, e.message, {APIcode: 'BADBODY'});
			}
		}
  }