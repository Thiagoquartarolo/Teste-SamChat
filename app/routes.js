var Message = require('./models/message');

module.exports = function(app) {

    app.get('/api/messages', function(req, res) {
        Message.find(function(err, messages) {
            if (err)
                res.send(err);

            res.json(messages);
        });
    });

    app.post('/api/messages', function(req, res){
        var newMessage = Message({
            message: req.body.chatMessage,
            user: req.body.user
        });
        newMessage.save(function(err){
            if(err)
                res.send(err)

            res.send({"msg": "OK"})
        })
    });

    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html');
    });
};
