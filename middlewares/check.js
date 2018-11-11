//检查用户登录状态 中间件
module.exports = {
    checkLogin: checkLogin((req, res, next) => {
        if (!req.session.user) {
            req.flash('error', '未登录');
            return res.redirect('/signin');
        }
        next();
    }),
    checkNotLogin: checkNotLogin((req, res, next) => {
        if (req.session.user) {
            req.flash('error', '已登录');
            return res.redirect('back'); //返回之前的页面
        }
        next();
    })
}