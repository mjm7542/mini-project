const express = require("express");
const cookieParser = require("cookie-parser");
const indexRouter = require("./routes/index.route");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const PORT = 3024;

app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
        credentials: true,
    })
);

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send("이게 왜 될까???");
});

app.use('/api', indexRouter);

app.listen(PORT, () => {
    console.log(PORT, '포트 번호로 서버가 실행되었습니다.');
})


module.exports = app;