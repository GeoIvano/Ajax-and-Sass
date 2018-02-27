$(document).ready(function() {
    $("#btn").click(function() {
        $.getJSON('https://jsonplaceholder.typicode.com/users', function(data) {
            $.each(data, function(num, user) {
                $("#container").append(`<li>Position: ${(num + 1)}<br>Name :${user.name}<br> City : ${user.address.city} </li>`)
            })
            $("#btn").off("click").css("cursor", "initial")

        })
    })
    $("#btn2").click(function() {
        $.get('https://jsonplaceholder.typicode.com/users', function(data) {
            $.each(data, function(i, person) {
                $("#container2").append(`<li>Position: ${i+1}<br>Email: ${person.email}<br>Phone: ${person.phone}</li>`)
            })
            $("#btn2").off("click").css("cursor", "initial")
        })
    })
})