const firebaseConfig = {
    apiKey: "AIzaSyCbMe9fS8pilIOKWamQkwEJKFXvRUgJZtk",
    authDomain: "smiu-740fc.firebaseapp.com",
    projectId: "smiu-740fc",
    storageBucket: "smiu-740fc.appspot.com",
    messagingSenderId: "442973349063",
    appId: "1:442973349063:web:07099324a53760a9a94ae2",
    measurementId: "G-H7V8Y6WYZD"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  // ..........................................
var em = document.getElementById('email')
var pd = document.getElementById('password')
function login(){
    if(em.value == "admin@com" && pd.value == "1234567"){
     alert("welcome")
    window.location = "./admin.html"
    }
    else{
        alert("You are not allowed to enter")
        // location.document
    }
}
function del(){
    em.value = ""
    pd.value = ""
}
function logout(){
    window.location = "./index.html"
}
function addstd(){
    window.location = "./addstd.html"
}
function addsub(){
    window.location = "./addsub.html"
}
function addcou(){
    window.location = "./addsub.html"
}
function addtea(){
    window.location = "./admin.html"
}
// ............................................................................
var tn = document.getElementById('name1')
var fac = document.getElementById('faculty')
var Desig = document.getElementById('Desig')
var contact = document.getElementById('contact')
var email1 = document.getElementById('email1')
var date = document.getElementById('date')
var pd1 = document.getElementById('pass')
var count = 1;
// "./stdact.html"
function dele(){
    tn.value = ""
    fac.value = ""
    Desig.value = 1
    contact.value = "" 
    email1.value = ""
    date.value = "CSC-..."
    pd1.value = ""   
}
function sub(){
    if(tn.value == "" || fac.value == "" || contact.value == "" || email1.value == "" || date.value == "" || pd1.value == "" || Desig.value == 1 || Desig.value == ""){
            alert("PLEASE GIVE FULL INFORMATION")
    }
    else{
        var db = app.database().ref('teachers');
        var tkey = db.push().key;

        var teacher_data = {
            teachersNam : tn.value,
            Techersemail:email1.value,
            Techerspass:pd1.value,
            tkey:tkey
        }
        db.child(tkey).set(teacher_data)
    }
}
    app.database().ref('teachers').on('child_added' , function(data){
        var table = document.getElementById("tb");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = count++;
        cell2.innerHTML = data.val().teachersNam;
        cell3.innerHTML = data.val().Techersemail;
        cell4.innerHTML = data.val().Techerspass;
        dele()
        alert("TEACHER ADDED")
    })    
// // ......................................................................................
var Sname = document.getElementById('Sname')
var sid = document.getElementById('Sid')
var Dep = document.getElementById('dept1')
var con = document.getElementById('contact1')
var em1 = document.getElementById('emailad')

function delet(){
Sname.value = ""
sid.value = ""
Dep.value = 1
con.value = ""
em1.value = ""
}
function subm(){
    if(Sname.value == "" || sid.value == "" || Dep.value == "" || Dep.value == "1" || con.value == "" || em1.value == ""){
        alert("PLEASE GIVE FULL INFORMATION ")
    }
    else{
        var db = app.database().ref('students');
        var skey = db.push().key;

        var student_data = {
            studentsNam : Sname.value,
            studentid:sid.value,
            studentemail:em1.value,
            skey:skey
        }
        db.child(skey).set(student_data)
  }
}
app.database().ref('students').on('child_added' , function(data){
        var table = document.getElementById("thb");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = count++;
        cell2.innerHTML = data.val().studentsNam;
        cell3.innerHTML = data.val().studentid;
        cell4.innerHTML = data.val().studentemail;
        delet()
        alert("STUDENT ADDED")
})
// // ..............................................................................
var cn = document.getElementById('namec')
var ci = document.getElementById('passwordc')
var cd = document.getElementById('Allotc')
function reset(){
    cn.value = ""
    ci.value = "";
    cd.value = 0
}
function submit(){
    if(cn.value == "" || ci.value == "" || cd.value == "" || cd.value == 0){
        alert("PLEASE FILL ")
    }
    else{
        var db = app.database().ref('course');
        var ckey = db.push().key;

        var course_data = {
            SubjectNam : cn.value,
            subjectId:ci.value,
            subjectS:cd.value,
            ckey:ckey
        }
        db.child(ckey).set(course_data)
  }
}
    app.database().ref('course').on('child_added' , function(data){
        var table = document.getElementById("thead");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = count++;
        cell2.innerHTML = data.val().SubjectNam;
        cell3.innerHTML = data.val().subjectId;
        cell4.innerHTML = data.val().subjectS;
        reset()
        alert("COURSE ADDED")
})
// ............................................
var TE = document.getElementById('email1')
var tp = document.getElementById('password1')

function sabhatao(){
    TE.value = ""
    tp.value = ""
}
function submi(){
    if(TE.value == "" || tp.value == ""){
        alert("PLEASE FILL")
    }
    else{
        window.location = "./chstd.html"
    }
}
var stdN = document.getElementById('stdname')
var stdP = document.getElementById('stdpassword')
var dt = document.getElementById('datetime')
function clearall(){
    stdN.value = ""
    stdP.value = ""
    dt.value = ""
}
function mark(){
    if(stdN.value == "" || stdP.value == "" || dt == ""){
        alert("fill")
    }
    else{
        var db = app.database().ref('student_atten');
        var stdkey = db.push().key;

        var student_mark = {
            std_Nam : stdN.value,
            STD_id: stdP.value,
            status: dt.value,
            stdkey:stdkey
        }
        db.child(stdkey).set(student_mark)
  }
}
app.database().ref('student_atten').on('child_added' , function(data){
    var table = document.getElementById('TBODY')
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = count++;
    cell2.innerHTML = data.val().std_Nam;
    cell3.innerHTML = data.val().STD_id;
    cell4.innerHTML = data.val().status;
    clearall()
    alert("STUDENT ATTENDANCE MARKED")
  })
// .........................................................................
var st_n = document.getElementById('namestd')
var st_p = document.getElementById('emailstd')
var Allotstd = document.getElementById('Allotstd')
var datet = document.getElementById('datet')
var marks = document.getElementById('marks')
function rem(){
st_n.value = ""
st_p.value = ""
Allotstd.value = "0"
datet.value = ""
marks.value = "" 
}

function result(){
    if(st_n.value == "" || st_p.value == "" || Allotstd.value == 0 || datet.value == "" || marks.value == ""){
        alert("please fill")
    }
        else{
        var db = app.database().ref('student_result');
        var reskey = db.push().key;

        var student_res = {
            std_Nam : st_n.value,
            STD_id: st_p.value,
            status: Allotstd.value,
            mark : marks.value,
            reskey:reskey
        }
        db.child(reskey).set(student_res)
  }
}
app.database().ref('student_result').on('child_added' , function(data){
    var table = document.getElementById('TDA')
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = data.val().std_Nam
    cell2.innerHTML = data.val().STD_id;
    cell3.innerHTML = data.val().status;
    cell4.innerHTML = data.val().mark;
    rem()
    alert("RESULT UPDATED")
  })