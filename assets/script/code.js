$(document).ready(function() {
    $("#btn").click(function() {
        $.getJSON('https://jsonplaceholder.typicode.com/users', function(data) {
            $.each(data, function(num, user) {
                $("#container").append(`<div>Position: ${(num + 1)}<br>Name :${user.name}<br> City : ${user.address.city} </div>`)
            })
            $("#btn").off("click")
        })
    })
    $("#btn2").click(function() {
        $.getJSON('https://jsonplaceholder.typicode.com/users', function(data) {
            $.each(data, function(i, person) {
                $("#container2").append(`<div>Position: ${i+1}<br>Email: ${person.email}<br>Phone: ${person.phone}</div>`)
            })
            $("#btn2").off("click")
        })
    })
})