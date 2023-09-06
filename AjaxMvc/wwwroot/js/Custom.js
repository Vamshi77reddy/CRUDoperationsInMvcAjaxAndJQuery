$(document).ready(function () {
    ShowData();
   // AddEmployee();
});
function ShowData() {
    $.ajax({
        url: '/Ajax/EmployeeList',
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, status, xhr) {
            var object = '';
            $.each(result, function (index, item){
                object += '<tr>'
                object += '<td>' + item.id + '</td>'
                object += '<td>' + item.name + '</td>'
                object += '<td>' + item.gender + '</td>'
                object += '<td>' + item.dep + '</td>'
                object += '<td>' + item.salary + '</td>'
                object += '<td><a href="#" class="btn btn-primary" onclick="Edit('+item.id+')">Edit</a> || <a href="#" class="btn btn-danger" onclick="Delete('+item.id+')">Delete</a></td>';
                object += '</tr>'

            });
            $('#table-Data').html(object);
        
        },
        error :function() {
            alert("data can't get")
        }
    });
};

$('#btnAddButton').click(function () {
    $('#EmployeeMadal').modal('show');
})
function AddEmployee() {
    var dataobj = {
        Name:$('#Name').val(),
        Gender:$('#Gender').val(),
        Dep:$('#Dep').val(),
        Salary:$('#Salary').val(),

    }
    $.ajax({
        url: '/Ajax/AddEmployee',
        type: 'Post',
        data: dataobj,
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded;charset=utf-8;',
        success: function () {
            alert('data saved');
            ClearTextBox();
            ShowData();
            HideModalPopUp()
        },
        error: function () {
            alert("data can't get")
        }
    });

    function HideModalPopUp() {
        $('#EmployeeMadal').modal('hide');
    }

    function ClearTextBox() {

        $('#Name').val('');
            $('#Gender').val('');
            $('#Dep').val('');
            $('#Salary').val('');
    }

   
}
function Delete(id) {
    $.ajax({
        url: '/Ajax/Delete?id=' + id,
        success: function () {
            alert('Record Deleted');
            ShowData();

        },
        error: function () {
            alert('Data cant be deleted');
        }
    })
}

function Edit(id) {
    $.ajax({
        url: '/Ajax/Edit?id=' + id,
        type: 'Get',
        contentType: 'application/json;charset=utf-8;',
        dataType: 'json',
        success: function (response) {
            $('#EmployeeMadal').modal('show');
            $('#EmployeeId').val(response.id)
            $('#Name').val(response.name);
            $('#Gender').val(response.gender);
            $('#Dep').val(response.dep);
            $('#Salary').val(response.salary);
            $('#AddEmployee').css('display', 'none')
            $('#btnUpdate').css('display', 'block')


        },
        error: function () {
            alert("Data not found")
        }
    })
}

function UpdateEmp() {
    var dataobj = {
        Id: $('#EmployeeId').val(),
        Name: $('#Name').val(),
        Gender: $('#Gender').val(),
        Dep: $('#Dep').val(),
        Salary: $('#Salary').val(),

    }
    $.ajax({
        url: '/Ajax/Update',
        type: 'Post',
        data: dataobj,
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded;charset=utf-8;',
        success: function () {
            alert('Data Updated');
            ClearTextBox();
            ShowData();
            HideModalPopUp()
        },
        error: function () {
            alert("data can't update")
        }
    })
}