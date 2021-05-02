const express = require("express");
const path = require("path");
const pool = require("../config");

const { loginAuth } = require('../middlewares')
router = express.Router();

// Require multer for file upload
const multer = require("multer");
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./static/uploads");
    },
    filename: function (req, file, callback) {
        callback(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

// router.post("/orderhistory", async (req, res, next) => {
router.post("/orderhistory", loginAuth, async (req, res, next) => {
    // console.log('start!!!!!');
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {

        let [info, _] = await conn.query(
            "select o.order_date, o.delivery_date, p.product_name, oi.item_amount, oi.item_price, oi.total_price, o.user_user_id, o.order_id" +
            " from 999auto.order o join order_item oi on(o.order_id = oi.order_order_id)" +
            " join product p on(oi.product_product_id = p.product_id)" +
            " where o.user_user_id = ? ;", [req.user.user_id]
        );
        let [isUser, __] = await conn.query(
            "SELECT a.user_username, u.user_fname, u.user_lname, u.user_phone, u.user_image" +
            " FROM user u join account a on(u.user_id = a.user_user_id)" +
            " where u.user_id = ?;", [req.user.user_id]
        );
        console.log([info, _][0].length);
        console.log([isUser, _][0]);

        const data = {
            orderDetail: info,
            userDetail: isUser
        }
        res.json({
            message: data

        });
        conn.commit();
        conn.release();

    } catch (error) {
        next(error)
    }
})

exports.router = router;

