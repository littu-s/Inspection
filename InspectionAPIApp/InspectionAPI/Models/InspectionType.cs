using System.ComponentModel.DataAnnotations;

namespace InspectionAPI.Models
{
    public class InspectionType
    {
        public int InspectionTypeId { get; set; }
        
        [StringLength(20)]
        public string InspectionName { get; set; } = string.Empty;
    }
}
