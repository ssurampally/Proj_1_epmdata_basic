// hdb_connection.xsjs
  /*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
/*eslint-env node, es6 */
"use strict";

var conn = $.hdb.getConnection();    
var query =
	`SELECT PURCHASEORDERID as "PurchaseOrderId", 
             PRODUCTID as "ProductID", 
             GROSSAMOUNT as "Amount"  FROM POITEM ` ;
var rs = conn.executeQuery(query);
$.response.setBody(JSON.stringify(rs));
$.response.contentType = "application/json";
$.response.status = $.net.http.OK;
