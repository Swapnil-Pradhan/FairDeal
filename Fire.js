// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('sw.js')
//       .then(reg => {
//         console.log('Service Worker registered with scope:', reg.scope);
//       })
//       .catch(error => {
//         console.error('Service Worker registration failed:', error);
//       });
// }

const firebaseConfig = {
    apiKey: "AIzaSyD0GGbyemoB3geMGxGR_cLSi9pudyPO1MM",
    authDomain: "begin-dd0d0.firebaseapp.com",
    databaseURL: "https://begin-dd0d0-default-rtdb.firebaseio.com",
    projectId: "begin-dd0d0",
    storageBucket: "begin-dd0d0.appspot.com",
    messagingSenderId: "1027323844006",
    appId: "1:1027323844006:web:990c8fa86631ac63082b67"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(),
    firestore = firebase.firestore(),
    storage = firebase.storage().ref(),
    hr = new Date().getHours();

firestore.settings({
    timeStampsInSnapshots: true
});

auth.onAuthStateChanged(crd => {
    if (crd) {
        const script = document.createElement("script");
        script.setAttribute("src", "Log.js");
        document.body.appendChild(script);
        document.getElementById("sign").style.display = "none";
        mail.innerHTML = crd.email.split("@")[0];
        dis.innerHTML = crd.displayName.split(" ")[0];
        nam.innerHTML = crd.displayName;
        bmail.innerHTML = crd.email;
        document.getElementById("dp").style.backgroundImage = "url('" + crd.photoURL + "')";
        id = crd.uid;
    } else {
        document.getElementById("sign").style.display = "flex";
    }
});

function signin(dis) {
    auth.signInWithEmailAndPassword(dis.email.value, dis.password.value).then(() => {
        alert("Welcome");
    }).catch(err => {
        alert(err.message);
    });
}

function register(dis) {
    if (dis.password.value == dis.cpass.value) {
        auth.createUserWithEmailAndPassword(dis.email.value, dis.password.value).then(cred => {
            return cred.user.updateProfile({
                displayName: dis.name.value,
                photoURL: "nodp.svg"
            }).then(() => {
                console.log(cred.user.uid)
                firestore.collection(cred.user.uid).doc("point").set({
                    score: 0
                }).then(() => {
                    alert("Thank you!");
                }).catch(err => {
                    alert(err.message);
                });
            });
        }).catch(err => {
            alert(err.message);
        });
    } else {
        alert("Confirm your password again");
        dis.password.value = "";
        dis.cpass.value = "";
        dis.password.focus();
    }
}

function sin(one, two) {
    const o = document.querySelector("#" + one), t = document.querySelector("#" + two), os = document.querySelector("#" + one + ">#s"), of = document.querySelector("#" + one + ">#f"), oi = document.querySelector("#" + one + ">form"), ti = document.querySelector("#" + two + ">form"), ts = document.querySelector("#" + two + ">#s"), tf = document.querySelector("#" + two + ">#f");
    if (o.style.height != "56%") {
        faltu.focus();
        o.style.height = "56%";
        o.style.width = "78%";
        t.style.width = "23%";
        t.style.height = "5vh";
        o.style.boxShadow = "0 0 99px 12px #0ff";
        t.style.boxShadow = "0 0 0 0 #0ff"
        os.style.display = "block";
        ti.style.opacity = "0";
        setTimeout(() => {
            os.style.fontSize = "300%"; os.style.border = "3px solid snow";
            tf.style.opacity = "1";
        }, 0)
        of.style.opacity = "0";
        ts.style.border = "0 solid transparent";
        ts.style.fontSize = "0";
        setTimeout(() => {
            of.style.display = "none";
            ti.style.display = "none";
            ts.style.display = "none";
            setTimeout(() => {
                oi.style.display = "flex";
                oi.style.opacity = "1";
                oi["fir"].focus();
            }, 200);
        }, 300);
        tf.style.display = "block";
    }
}

function ud(dis) {
    document.querySelectorAll("form>input").forEach(h => {
        h.style.borderBottom = "0";
    });
    dis.style.borderBottom = "7px solid #ffb200";
}

function main(aid, x) {
    const sec = document.querySelector("section"), elm = document.getElementById(aid),
        ap = document.querySelector("#" + aid + ">div");
    if (document.querySelector("#" + aid + ">div").innerHTML == "") {
        setTimeout(() => {
            elm.style.height = "100%";
            elm.style.width = "100%";
        }, 123);
        elm.style.left = "50%";
        elm.style.transform = "translate(-50%, -50%)";
        elm.style.top = "50%";
        elm.style.border = "0 solid white";
        elm.style.zIndex = "1";
        elm.style.background = "rgba(0, 19, 28, .7)";
        elm.style.backdropFilter = "blur(123px)";
        elm.style.justifyContent = "flex-start";
        elm.style.alignItems = "stretch";
        setTimeout(() => {
            elm.style.borderRadius = "0";
            document.querySelector("#" + aid + ">center").style.display = "block";
        }, 250);
        var s, t;
        if (aid == "fruit") {
            s = fruit; t = "Fruits";
        } else if (aid == "veg") {
            s = veg; t = "Veggies";
        } else if (aid == "grain") {
            s = grain; t = "Grains";
        } else if (aid == "milk") {
            s = dairy; t = "Dairy";
        }
        s.once("value").then((f) => {
            const l = f.val(), fal = Object.keys(l);
            for (var i in l) {
                const hel = document.createElement("span"), v = Math.round(l[i]["i"].reduce((a, b) => a + b) / (l[i]["i"].length - 1));
                hel.innerHTML = "<span>" + i + "</span><span>≈</span><span>" + `${isNaN(v) ? "No data" : "₹" + v}` + " <i id='" + i + "' onclick='plus(this.id, `" + t + "`, `" + v + "`)'>✎</i></span>";
                ap.appendChild(hel);
                ap.style.display = "block";
                setTimeout(() => {
                    ap.style.opacity = "1";
                }, 1);
            }
            if (x) {
                console.log(JSON.stringify(x));
                const y = document.getElementById(x), z = (y.parentNode).parentNode;
                y.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                z.style.animation = "search .7s infinite alternate";
            }
        });
        document.querySelector("section>#" + aid + ">span").style.display = "flex";
    }
}