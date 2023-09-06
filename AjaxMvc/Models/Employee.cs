using System.ComponentModel.DataAnnotations;

namespace AjaxMvc.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "{0} should be given")]
        public string Name { get; set; }
        [Required(ErrorMessage = "{0} should be given")]

        public string Gender { get; set; }
        [Required(ErrorMessage = "{0} should be given")]

        public string Dep { get; set; }
        [Required(ErrorMessage = "{0} should be given")]

        public double Salary { get; set; }
    }
}
