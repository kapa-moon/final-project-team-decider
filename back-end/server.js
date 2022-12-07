let server = require('./app'),
port = process.env.PORT;

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
