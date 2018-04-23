var db = require('../dbconnection');
var _ = require('lodash');

var login = {
    authCheck: function (userName,callback) {
      
        return db.query("select * from cities", callback);
    },
    toolKitDetails: function (data, callback) {

        return db.query("Select c.slug_name as country_name,s.slug_name as state_name,ct.slug_name as cit" +
                "y_name,u.country_id,u.state_id,u.city_id,tb.booklet_id,tb.parent_booklet_id,tb.booklet_name,tb.booklet_slug_name  from user_access_toolkit u, countries " +
                "c, states s, cities ct, toolkit_booklets tb where  u.country_id=c.country_id AND u.state_id=s.state_i" +
                "d AND u.city_id=ct.city_id AND tb.booklet_id=u.booklet_id AND user_id=? ",
        [data.user_id], callback);
    },
    getPassword: function (userId, callback) {

        return db.query("Select user_password from users where user_id=?", [userId], callback);
    },

    updatePassword: function (newPassword, userId, callback) {

        return db.query("update users set user_password=? where user_id=?", [
            newPassword, userId
        ], callback);
    },

    newUserPassword : function (data, callback) {
        return db.query("select * from users  where email=?", [
        data.email,
        ], callback);
    },
    newUserPasswordSet: function (data, callback) {
        return db.query("update users set user_password=? where email=?", [
            data.Pwd, data.email,
        ], callback);
    },
    userToolkits: function (userId, callback) {

        return db.query("select * from user_access_toolkit where user_id=?", [data.user_id], callback);
    },

    updateMetrics : function (data, callback) {
        
        db.query("select count(*) as count from  metrics where user_id=? and created_date=?",[data.user_id,data.currentDate],function (err, userCount){
             if (userCount[0].count == 0) {
        return db.query("Insert metrics set user_id=?,os_type=?,mobile_type=?,product=?,manufacturer=?,browser_type=?,created_date=?,year=?,month=?,booklet_id=?",
        [data.user_id,data.os_type,data.mobile_type,data.product,data.manufacturer,data.browser_type,data.currentDate,data.year,data.month,data.booklet_id], callback)
                                  }
         else{
               callback({Status: 'done for today'})
               }
           })
         }
       };

module.exports = login;
