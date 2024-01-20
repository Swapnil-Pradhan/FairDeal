$(document).ready(function () {
    $("#locs").css("color", "white");
    $("#locs").change(function () {
        const curr = $("#locs").val();
        if (curr != "null") {
            $("#locs").css("color", "white");
        } else {
            $("#locs").css("color", "white");
        }
    });
});


var loc, fruit, veg, dairy, grain, id;
$.get("https://ipinfo.io/json?token=40c851c1d853c3", function (data) {
    loc = data.city;
    now.innerHTML = loc;
    now.value = loc;
}).then(() => {
    fruit = firebase.database().ref(loc + "/Fruits");
    veg = firebase.database().ref(loc + "/Veggies");
    dairy = firebase.database().ref(loc + "/Dairy");
    grain = firebase.database().ref(loc + "/Grains");
    if (data.country != "IN") {
        document.body.style.display = "none";
        alert("This app is not available in your country!");
    }
});

firestore.collection(id).doc("point").get().then(snap => {
    document.getElementById("scr").innerHTML = snap.data().score;
});

function sinout() {
    if (confirm("Are you sure?") === true) {
        auth.signOut().then(() => {
            alert("You logged out.");
        });
    }
}

function add() {
    if (loc) {
        firebase.database().ref(loc).set({
            Fruits,
            Grains,
            Veggies,
            Dairy
        }).then(() => {
            alert("Sorry, " + loc + " is currently unavailable. It'll be added soon");
        });
    } else {
        alert("Some security service is stopping us from detecting your location automatically");
    }
}

firebase.database().ref().once("value").then((city) => {
    const cities = Object.keys(city.val());
    if (cities.includes(loc) === false) {
        add();
    }
    cities.forEach(function (pls) {
        if (pls != loc) {
            const sel = document.createElement("option");
            sel.innerHTML = pls;
            sel.setAttribute("value", pls);
            other.appendChild(sel);
        }
    });
});

function update() {
    auth.currentUser.updateProfile({
        photoURL: imur
    }).then(() => {
        alert("Done!");
    }).catch(err => {
        alert(err.message);
    });
}

function upem() {
    var em = prompt("Enter new E-mail", "E-mail");
    auth.currentUser.updateEmail(em).then(() => {
        alert("E-mail changed successfully!");
    }).catch((error) => {
        alert(err.message);
    });
}

function upnm() {
    var nm = prompt("Enter new name", "Your name here");
    auth.currentUser.updateProfile({
        displayName: nm
    }).then(() => {
        alert("Name updated successfully!");
    }, err => {
        alert(err.message);
    });
}

function chngpass() {
    var np = prompt("Enter new password", "Password"), cnp;
    if (np != "" && np != null) {
        cnp = prompt("Confirm password");
    }
    if (np == cnp) {
        auth.currentUser.updatePassword(np).then(() => {
            alert("Password reset successfully!");
        }, err => {
            alert(err.message);
        });
    } else {
        alert("Enter new password again!");
        chngpass();
    }
}

function dp() {
    var fil = document.getElementById("file").files[0];
    storage.child(id).put(fil).then(res => {
        storage.child(id).getDownloadURL().then(url => {
            document.getElementById("dp").style.backgroundImage = "url('" + url + "')";
            auth.currentUser.updateProfile({
                photoURL: url
            });
        });
    });
}

function plus(j, q, r) {
    firebase.database().ref(loc + "/" + q + "/" + j + "/i").once("value").then((f) => {
        const i = f.val();
        var inp = parseInt(prompt("Enter price", "Price"));
        if (inp != null && inp != "" && inp < 999 && inp > 9) {
            if (inp >= r && inp - r < 50 && r != null) {
                i.push(inp);
                firebase.database().ref(loc + "/" + q + "/" + j).set({
                    i
                }).then(() => {
                    firestore.collection(id).doc("point").set({
                        score: scr.innerHTML - (-10)
                    }).then(() => {
                        alert(`Thank you for contributing for the society
You earned some points 🥳`);
                        scr.innerHTML = scr.innerHTML - (-10);
                    });
                });
            } else if (inp < r && r - inp < 50 && r != null) {
                i.push(inp);
                firebase.database().ref(loc + "/" + q + "/" + j).set({
                    i
                }).then(() => {
                    firestore.collection(id).doc("point").set({
                        score: scr.innerHTML - (-10)
                    }).then(() => {
                        alert(`Thank you for contributing for the society
You earned some points 🥳`);
                        scr.innerHTML = scr.innerHTML - (-10);
                    });
                });
            } else if (isNaN(r)) {
                i.push(inp);
                firebase.database().ref(loc + "/" + q + "/" + j).set({
                    i
                }).then(() => {
                    firestore.collection(id).doc("point").set({
                        score: scr.innerHTML - (-10)
                    }).then(() => {
                        alert(`Thank you for contributing for the society
You earned some points 🥳`);
                        scr.innerHTML = scr.innerHTML - (-10);
                    });
                });
            } else {
                alert("😑");
            }
        }
    });
}

document.querySelectorAll("section>div>div").forEach(k => {
    k.style.height = "42%";
});

function band(t, l, b, bid) {
    const elm = document.getElementById(bid), ap = document.querySelector("section>#" + bid + ">div");
    setTimeout(() => {
        elm.style.height = "39%";
        elm.style.width = "44%";
    }, 0)
    setTimeout(() => {
        elm.style.left = l;
        elm.style.top = t;
        elm.style.justifyContent = "center";
        elm.style.alignItems = "center";
        elm.style.transform = "translate(0, 0)";
        ap.style.opacity = "0";
        document.querySelectorAll("section>div>div").forEach(f => { f.style.height = "0" })
    }, 123);
    document.querySelector("#" + bid + ">center").style.display = "flex";
    elm.style.border = "7px solid white";
    ap.style.display = "none";
    setTimeout(() => {
        ap.style.display = "none";
        ap.innerHTML = "";
    }, 250);
    setTimeout(() => {
        elm.style.borderRadius = "99px";
        elm.style.background = b;
        elm.style.backdropFilter = "blur(0)";
        elm.style.zIndex = "0";
    }, 345);
    document.querySelector("section>#" + bid + ">span").style.display = "none";
}

const Veggies = {
    "Potato": { "i": [0] },
    "Onion": { "i": [0] },
    "Ladyfinger": { "i": [0] },
    "Brinjal": { "i": [0] },
    "Cauliflower": { "i": [0] },
    "Corn": { "i": [0] },
    "Garlic": { "i": [0] },
    "Ginger": { "i": [0] },
    "Tomato": { "i": [0] },
    "Pumpkin": { "i": [0] },
    "Gourd": { "i": [0] },
    "Bitter Gourd": { "i": [0] },
    "Drumstick": { "i": [0] },
    "Pointed Gourd": { "i": [0] },
    "Apple Gourd": { "i": [0] },
    "Arum": { "i": [0] },
    "French beans": { "i": [0] },
    "Beans": { "i": [0] },
    "Carrot": { "i": [0] },
    "Radish": { "i": [0] },
    "Beetroot": { "i": [0] },
    "Papaya": { "i": [0] },
    "Turnip": { "i": [0] },
    "Mushroom": { "i": [0] },
    "Peas": { "i": [0] },
    "Sweet Potato": { "i": [0] },
    "Cabbage": { "i": [0] },
    "Coriander": { "i": [0] },
    "Spinach": { "i": [0] },
    "Snake Gourd": { "i": [0] },
    "Fenugreek": { "i": [0] }
},

    Fruits = {
        "Mango": { "i": [0] },
        "Banana": { "i": [0] },
        "Apple": { "i": [0] },
        "Custard Apple": { "i": [0] },
        "Pomegranate": { "i": [0] },
        "Watermelon": { "i": [0] },
        "Melon": { "i": [0] },
        "Peach": { "i": [0] },
        "Kiwi": { "i": [0] },
        "Strawberry": { "i": [0] }
    },

    Dairy = {
        "Paneer": { "i": [0] },
        "Butter": { "i": [0] },
        "Milk": { "i": [0] },
        "Curd": { "i": [0] }
    },

    Grains = {
        "Rice": { "i": [0] },
        "Cereals": { "i": [0] },
        "Pulse": { "i": [0] },
        "Saffron": { "i": [0] }
    };

function op() {
    blr.style.display = "block";
    setTimeout(() => {
        blr.style.opacity = "1";
        blr.style.backdropFilter = "blur(9px)";
    }, 0);
    sid.style.width = "50%";
}

function cls() {
    blr.style.opacity = "0";
    blr.style.backdropFilter = "blur(0)";
    setTimeout(() => {
        blr.style.display = "none";
    }, 300);
    sid.style.width = "0";
}

document.querySelectorAll(".ripple").forEach(ripple => {
    ripple.addEventListener("click", function (point) {
        const ripples = document.createElement("i");
        ripples.classList.add("pani");
        ripples.style.left = point.clientX - point.target.offsetLeft + "px";
        ripples.style.top = point.clientY - point.target.offsetTop - 300 + "px";
        this.appendChild(ripples);
        setTimeout(() => {
            ripples.remove();
        }, 1010);
    });
});

function chng(dis) {
    loc = dis.value;
    fruit = firebase.database().ref(loc + "/Fruits");
    veg = firebase.database().ref(loc + "/Veggies");
    dairy = firebase.database().ref(loc + "/Dairy");
    grain = firebase.database().ref(loc + "/Grains");
}

if (hr < 12) {
    wish.innerHTML += "Morning,";
} else if (hr < 18) {
    wish.innerHTML += "Afternoon,";
} else {
    wish.innerHTML += "Evening,";
}

function duser() {
    if (confirm("Your account will be deleted permanently.") === true) {
        firestore.collection(id).doc("point").delete();
        storage.child(id).delete();
        auth.currentUser.delete().then(() => {
            alert("User deleted.");
           
        }).catch(err => {
            alert(err.message);
        });
    }
}

document.querySelector("#sp2").addEventListener("submit", sSubmit);

function sSubmit() {
    console.log("sSubmit run hua");
    const x = (document.getElementById("srch").value).replace(/\b\w/g, (letter) => letter.toUpperCase());
    if (Veggies[x]) {
        main("veg", x);
    } else if (Fruits[x]) {
        main("fruit", x);
    } else if (Dairy[x]) {
        main("milk", x);
    } else if (Grains[x]) {
        main("grain", x);
    } else {
        alert(`${x} is not added yet 🫤`);
    }
}
