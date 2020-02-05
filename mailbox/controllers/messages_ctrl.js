const fetch = require('node-fetch');
const messages = require('../db/mail');

const myUrl = process.argv[2];

function getInbox(req, res) {
    const inboxMsgs = messages.getMessages('inbox');
    res.render('inbox', { inboxMsgs });
}

function getSent(req, res) {
    const sentMsgs = messages.getMessages('sent');
    res.render('inbox', { sentMsgs });
}

function getCompose(req, res) {

    if (Object.keys(req.query).length) {
        const replyMsg = req.query;
        res.render('compose', { replyMsg });
        return;
    }
    res.render('compose');
}

function getDetails(req, res) {
    const msg = messages.getMessages('inbox').find(msg => msg.id == req.params.msgID);
    res.render('msgDetail', { msg });
}

function receiveMsg(req, res) {
    messages.addMessage('inbox', req.body);
    res.status(200).json('ok');
}

function sendMsg(req, res) {
    const msg = new messages.Message(myUrl, req.body.to, req.body.subject, req.body.content);
    const address = req.body.to;

    fetch(`http://${address}/inbox`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(msg)
    }).then(result => {
        if (result.status === 200) {
            res.redirect('/compose?alert=success');
            return;
        }
        res.redirect('/compose?alert=failed');
    }).catch(err => console.log(err))
}

module.exports = { getInbox, getSent, getCompose, getDetails, receiveMsg, sendMsg }