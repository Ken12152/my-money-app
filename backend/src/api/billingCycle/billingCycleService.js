const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })
BillingCycle.after('post', errorHandler).after('put', errorHandler)

BillingCycle.route('get', (req, res, next) => {
    BillingCycle.find({}, (error, docs) => {
        if(!error) {
            res.json(docs)
        } else {
            res.status(500).json({ errors: [error] })
        }
    }).skip(req.query.skip).limit(req.query.limit)
})

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(!error) {
            res.json({ value })
        } else {
            res.status(500).json({ errors: [error] })
        }
    })
})

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{
        $project: { debt: { $sum: "$debts.value" }, credit: { $sum: "$credits.value"}}
    }, {
        $group: { _id: null, debt: { $sum: "$debt" }, credit: { $sum: "$credit" }}
    }, {
        $project: { _id: 0,  debt: 1, credit: 1 }
    }], (error, result) => {
        if(!error) {
            res.json(result[0] || { debt: 0, credit: 0 })
        } else {
            res.status(500).json({ errors: [error] })
        }
    })
})

module.exports = BillingCycle