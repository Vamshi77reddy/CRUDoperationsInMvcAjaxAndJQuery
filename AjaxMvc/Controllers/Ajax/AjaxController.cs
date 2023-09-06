using AjaxMvc.Data;
using AjaxMvc.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace AjaxMvc.Controllers.Ajax
{
    public class AjaxController : Controller
    {
        private readonly ApplicationContext context;
        public AjaxController(ApplicationContext context)
        {
            this.context = context;
        }
        public IActionResult Index()
        {
            return View();
        }
        public JsonResult EmployeeList()
        {
            var data = context.Employees.ToList();
            return new JsonResult(data);
        }

        [HttpPost]
        public JsonResult AddEmployee(Employee employee)
        {
            var emp = new Employee()
            {
                Name = employee.Name,
                Gender = employee.Gender,
                Dep = employee.Dep,
                Salary = employee.Salary,
            };
           
            context.Employees.Add(emp);
            context.SaveChanges();
            return new JsonResult("data is saved");
        }

        public JsonResult Delete(int id)
        {
            var emp = context.Employees.Where(x => x.Id == id).SingleOrDefault();
            context.Employees.Remove(emp);
            context.SaveChanges();
            return new JsonResult($"{id} deleted");
        }
        public JsonResult Edit(int id) {
        var emp=context.Employees.Where(x=>x.Id == id).SingleOrDefault();
            return new JsonResult(emp);
        }

        [HttpPost]
        public JsonResult Update(Employee employee)
        {
            context.Employees.Update(employee);
            context.SaveChanges();
            return new JsonResult("Updated");
        }
    }
}