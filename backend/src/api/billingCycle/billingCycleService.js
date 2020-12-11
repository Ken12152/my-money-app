const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.route('get', (req, res, next) => {
    BillingCycle.find({}, (error, docs) => {
        if(!error) {
            res.json(docs)
        } else {
            res.status(500).json({ errors: [error] })
        }
    })
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

module.exports = BillingCycle