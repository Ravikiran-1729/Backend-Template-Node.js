
// runtime error handler middleware (Internal Server Problem)
const error = (err, req, res, next) =>{
    console.log(err.stack);

    return res.status(err.status || 500).render('error', {
        status : err.status || 500,
        title : err.message || "Internal Server Error",
    });
};




module.exports = error;

