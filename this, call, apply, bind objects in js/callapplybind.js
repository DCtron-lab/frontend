///Call

var obj = {
    name: "DCtron",
    age: 20,
    func: function() //function func()
        {
            console.log(this.name)

            //put this for whole function
            //console.log(this)
        }

}

obj.func()
obj.func.call({ name: "Deepak" }) //parameters({obj:arguments})





var DCtron = {
    gadget: "laptop",
    age: 20
}

var Vilgax = {
    gadget: "phone",
    age: 21
}

//function dost() without argumnets
function dost(_a, _b) {
    console.log("use " + this.gadget + " for making project")
    console.log("hi? " + _a, "and your age? " + _b)
}

//dost.call(DCtron)
//dost.call(Vilgax)

//also pass arguments

dost.call(DCtron, "hello", 22)

///Apply   

//in apply,, instead of passing arguments, passing an arguments in an array 

dost.apply(DCtron, ["hello", 22])


///Bind

//It returns a bounded function 
var dalali = dost.bind(DCtron, "hello", 22); //passes arguments like call
dalali()

//also pass argument while calling a function
var dalali = dost.bind(Vilgax);
dalali("hello", 22)