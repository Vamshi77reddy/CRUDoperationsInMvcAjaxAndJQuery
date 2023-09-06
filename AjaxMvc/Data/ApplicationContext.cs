using AjaxMvc.Models;
using Microsoft.EntityFrameworkCore;

namespace AjaxMvc.Data
{
    public class ApplicationContext:DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext>options):base(options) { }
        public DbSet<Employee> Employees { get; set; }
    }
}
