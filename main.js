var username;
const btnGetUser = document.querySelector('#app button');
const iptGetUser = document.querySelector('#app input');
const ulGetUser = document.querySelector('#app ul');

btnGetUser.onclick = async function() {
    var username = iptGetUser.value;
    iptGetUser.value = '';

    let lstFormat = '';

    var response = await (await fetch(`https://api.github.com/users/${username}`)).json();
    if (response.name != undefined) {
        lstFormat = `<li><div class="container pt-3 pb-3" style="border-bottom: 1px solid #cccccc">
                            <div class="row">
                                <div class="col-3 pl-0 pr-0">
                                    <img src="${response.avatar_url}" width="45px" 
                                    style="display:inline-block; border-radius:50%">
                                </div>
                                <div class="col-9 pl-0 pr-0">
                                    <b style="color:#772d7e">${response.name}</b> <br>
                                    <small style="color:#a8a8a8">${response.login}</small>
                                </div>
                                <div class="col-12 pl-0 pr-0 pt-2" style="text-align:center">
                                <small style="color:#a8a8a8"><i>"${response.bio}"</i></small>
                                </div>
                                <div class="col-6 pl-0 pr-0 pt-2">
                                    <small style="color:#a8a8a8"><b style="color:#a526b1">
                                    Followers:</b> ${response.followers}</small>
                                </div>
                                <div class="col-6 pl-0 pr-0 pt-2">
                                    <small style="color:#a8a8a8"><b style="color:#a526b1">
                                    Following:</b> ${response.following}</small>    
                                </div>
                                <div class="col-12 pl-0 pr-0 pt-1">
                                    <small style="color:#a8a8a8"><b style="color:#a526b1">
                                    Public Repositories:</b> ${response.public_repos}</small>
                                </div>
                            </div>
                        </div></li>`
        ulGetUser.innerHTML += lstFormat;
        //lstFormat = `${response.name}</div></div></div></li>`;
        //ulGetUser.innerHTML += lstFormat;
        
    }

    console.log(response);
}
