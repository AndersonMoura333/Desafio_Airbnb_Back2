import app from './app';


app.listen(process.env.PORT || 3000, () => {
    console.log('Express na porta: ', app.get('port'));
    console.log('Express no modo: ', app.get('env'));
})


