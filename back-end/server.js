let server = require('./app'),
port = process.env.PORT || '4000';

listen = server.listen(port, () =>
{
    console.log(`server running on port: ${port}`);
});

function close()
{
    listen.close();
}

module.exports =
{
    close: close,
}
