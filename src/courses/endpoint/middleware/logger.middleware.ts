
export function logger(req, res, next) {
    console.log(`log : ${req.body}`);
    next();
}