/*
    a 태그가 있는데 얘를 눌렀을 때 서버로 요청이 자동으로 보내지는데 이를 막아야함.

    js 스크립트에서 화면을 변경해야함.
*/

/**
 * 경로에 해당하는 작업을 수행하도록 하는 역할
 * @param {경로} url 
 */

function router(url){
    if(url === '/'){
        viewHome();
    }else if(url === '/contact'){
        viewContact();
    }else if(url === '/service'){
        viewService();
    }else if(url === '/product'){
        viewProduct();
    }else{
        viewNotFound();
    }
}

function viewHome(){
    var root = document.getElementById('root');
    root.innerHTML = '<h1> Home </h1>'
}
function viewContact(){
    var root = document.getElementById('root');
    root.innerHTML = '<h1> Contact </h1>'
}
function viewService(){
    var root = document.getElementById('root');
    root.innerHTML = '<h1> Service </h1>'

    // 서버로 요청을하고 데이터를 가지고와서 화면에다가 출력.

    ajax('Get','/services', function(err, res){
        if(err){
            console.log(err);
        }else{
            var obj = JSON.parse(res); // json string -> object
            // JSON.stringify() object -> json string
            console.log(res);
            console.log(obj);

            var servicesHTML = ''
            for(var i=0; i<obj.result.length; i++){
                var service = obj.result[i];

                servicesHTML += '<div> <h1>'+service.title+'</h1> <p>'+service.content+'</p> </div>'
            }
            root.innerHTML = servicesHTML;
        }
    })
}
function viewProduct(){
    var root = document.getElementById('root');
    root.innerHTML = '<h1> Product </h1>'
}
function viewNotFound(){
    var root = document.getElementById('root');
    root.innerHTML = '<h1> Not Found! </h1>'
}

function init(){
    document.querySelector('nav').addEventListener('click',function(e){
        if(e.target && e.target.nodeName === 'A'){
            console.log('here')
            e.preventDefault(); // a 태그 작동 안하게
            var path = e.target.getAttribute('href');

            history.pushState({path: path}, null, path); // 상단에 url을 바뀌게 해준다. 하지만 내용은 안바뀜.
            router(path);
        }
    })

    window.onpopstate = function(e){
        if(e.state && e.state.path){
            router(e.state.path)
        } 
    } // 페이지 이동하면 내용도 바뀌게


    var path = location.href.split('/')[3];
    router('/'+path);
}

init();


function ajax(method, url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.send();

    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                callback(null, xhr.response);
            }else{
                callback(new Error(xhr.statusText));
            }
        }
    }
}