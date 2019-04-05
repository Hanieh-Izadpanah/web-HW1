function gotoLoginPage() {
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function gotoRegisterPage() {
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "block";
}

function checkEmail()
{
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    var email = document.getElementById('email');
    var message = document.getElementById('error-nw1');
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email.value))
    {
        email.style.borderBottomColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "پست الکترونیک وارد شده معتبر است.";
    }
    else
    {
        email.style.borderBottomColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "پست الکترونیک وارد شده معتبر نمی باشد."
    }

}

function checkPass()
{
    var pass1 = document.getElementById('password');
    var pass2 = document.getElementById('repeat-pass');
    var passMessage = document.getElementById('error-nw2');
    var repeatPassMessage = document.getElementById('error-nw3');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";

    if(pass1.value.length > 7)
    {
        pass1.style.borderBottomColor = goodColor;
        passMessage.style.color = goodColor;
        passMessage.innerHTML = "رمز عبور معتبر است.";
    }
    else
    {
        pass1.style.borderBottomColor = badColor;
        passMessage.style.color = badColor;
        passMessage.innerHTML = "رمز عبور باید حداقل 8 کاراکتر باشد.";
        return;
    }

    if(pass1.value == pass2.value)
    {
        pass2.style.borderBottomColor = goodColor;
        repeatPassMessage.style.color = goodColor;
        repeatPassMessage.innerHTML = "رمزهای عبور یکسان هستند.";
    }
    else
    {
        pass2.style.borderBottomColor = badColor;
        repeatPassMessage.style.color = badColor;
        repeatPassMessage.innerHTML = "رمزهای عبور یکسان نیستند.";
    }
}

function showBlogTitle1() {
    document.getElementById("first-blog-title").style.display = "block";
}

function showBlogTitle2() {
    document.getElementById("second-blog-title").style.display = "block";

}

function showBlogTitle3() {
    document.getElementById("third-blog-title").style.display = "block";
}

function hideBlogTitle1() {
    document.getElementById("first-blog-title").style.display = "none";
}

function hideBlogTitle2() {
    document.getElementById("second-blog-title").style.display = "none";

}

function hideBlogTitle3() {
    document.getElementById("third-blog-title").style.display = "none";
}

