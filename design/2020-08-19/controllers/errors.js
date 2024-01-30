exports.get404 = (_req, res, _next) => {
    return res.render('404', {
        title: "404",
        path: "/404"
    });
}