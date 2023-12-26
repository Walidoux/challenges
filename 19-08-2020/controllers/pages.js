exports.getHome = (_req, res, _next) => {
    return res.render('index', {
        title: "Accueil",
        path: "/home"
    });
}

exports.getBoutique = (_req, res, _next) => {
    return res.render('boutique', {
        title: "Boutique",
        path: "/boutique"
    });
}

exports.getFAQ = (_req, res, _next) => {
    return res.render('faq', {
        title: "FAQ",
        path: "/faq"
    });
}

exports.getContact = (_req, res, _next) => {
    return res.render('contact', {
        title: "Contact",
        path: "/contact"
    });
}

exports.getMaintenance = (_req, res, _next) => {
    return res.render('maintenance', {
        title: "Maintenance",
        path: "/maintenance"
    });
}