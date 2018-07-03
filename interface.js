const Koa=require('koa');
const app=new Koa();
const Router=require('koa-router');
const router=new Router();
const bodyParser=require('koa-bodyparser');

app.use(bodyParser());


router.post('/api/data/post',(ctx,next)=>{
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set('Content-Type','application/json');
    console.log(ctx.request.body);
    ctx.status=200;
    ctx.body={
        code:'0000',
        msg:'success'
    };
});

/* OSS system Using */
//userToken
let userToken='';


//login
router.post('/oss/user/login',(ctx,next)=>{
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set('Content-Type','application/json');
    console.log(ctx.response.body);
    if (ctx.response.body.userName!=='admin'&&ctx.response.body.password!=='esen') {
        ctx.status=200;
        ctx.body={
            code:'0500',
            msg:'用户名密码不正确！'
        };
    }else{
        ctx.status=200;
        ctx.body={
            code:'0000',
            msg:'登陆成功！'
        };
    };
});


//menuList
router.post('/oss/menu/each',(ctx,next)=>{
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set('Content-Type','application/json');
    console.log(ctx.response.body);

});

/* End */

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(9777,()=>{
    console.log('listen at 9777!');
});