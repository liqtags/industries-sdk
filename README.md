# Industries SDK


```javascript
  // Get all top-level industries
  getTopLevelIndustries().map(i => i.name));
  
  // Find a specific industry
  const softwareDev = findIndustryByName("Software Development");
 
  // Get subcategories
  const techSubcategories = getSubcategories("Technology, Information and Media");
  
  // Get industry path
  const path = getIndustryPath("Mobile Gaming Apps");
  
  // Get industries at depth 2
  const depth2Industries = getIndustriesAtDepth(2);
  
  // Get leaf industries
  const leafIndustries = getLeafIndustries();
  
  // Get industry depth
  const depth = getIndustryDepth("Mobile Gaming Apps");
  
  // Get parent industries
  const parents = getParentIndustries("Mobile Gaming Apps");
```


```javascript
Top Level Industries: [
  "Accommodation Services",
  "Administrative and Support Services",
  "Construction",
  "Consumer Services",
  "Education",
  "Entertainment Providers",
  "Farming, Ranching, Forestry",
  "Financial Services",
  "Government Administration",
  "Holding Companies",
  "Hospitals and Health Care",
  "Manufacturing",
  "Oil, Gas, and Mining",
  "Professional Services",
  "Real Estate and Equipment Rental Services",
  "Retail",
  "Technology, Information and Media",
  "Transportation, Logistics, Supply Chain and Storage",
  "Utilities",
  "Wholesale"
]

Software Development Industry: {
  name: "Software Development",
  subcategories: [
    {
      name: "Computer Games",
      subcategories: [ { name: "Mobile Gaming Apps" } ]
    },
    { name: "Computer Networking Products" },
    { name: "Data Security Software Products" },       
    { name: "Desktop Computing Software Products" },   
    { name: "Embedded Software Products" },
    { name: "Mobile Computing Software Products" }     
  ]
}

Technology Subcategories: [
  "Media and Telecommunications",
  "Technology, Information and Internet"
]

Path to Mobile Gaming Apps: [
  "Technology, Information and Media",
  "Technology, Information and Internet",
  "Software Development",
  "Computer Games",
  "Mobile Gaming Apps"
]

Industries at depth 2: [
  "Bars, Taverns, and Nightclubs",
  "Caterers",
  "Mobile Food Services",
  "Restaurants",
  "Bed-and-Breakfasts, Hostels, Homestays",
  "Hotels and Motels",
  "Janitorial Services",
  "Landscaping Services",
  "Security Guards and Patrol Services",
  "Security Systems Services",
  "Executive Search Services",
  "Temporary Help Services",
  "Nonresidential Building Construction",
  "Residential Building Construction",
  "Highway, Street, and Bridge Construction",
  "Subdivision of Land",
  "Utility System Construction",
  "Building Equipment Contractors",
  "Building Finishing Contractors",
  "Building Structure and Exterior Contractors",
  "Industry Associations",
  "Political Organizations",
  "Professional Organizations",
  "Laundry and Drycleaning Services",
  "Personal Care Services",
  "Pet Services",
  "Commercial and Industrial Machinery Maintenance",
  "Electronic and Precision Equipment Maintenance",
  "Footwear and Leather Goods Repair",
  "Reupholstery and Furniture Repair",
  "Vehicle Repair and Maintenance",
  "Cosmetology and Barber Schools",
  "Fine Arts Schools",
  "Flight Training",
  "Language Schools",
  "Secretarial Schools",
  "Sports and Recreation Instruction",
  "Historical Sites",
  "Museums",
  "Zoos and Botanical Gardens",
  "Circuses and Magic Shows",
  "Dance Companies",
  "Performing Arts",
  "Spectator Sports",
  "Theater Companies",
  "Amusement Parks and Arcades",
  "Gambling Facilities and Casinos",
  "Golf Courses and Country Clubs",
  "Skiing Facilities",
  "Wellness and Fitness Services",
  "Horticulture",
  "Fisheries",
  "Ranching",
  "Investment Advice",
  "Investment Banking",
  "Investment Management",
  "Securities and Commodity Exchanges",
  "Venture Capital and Private Equity Principals",
  "Banking",
  "International Trade and Development",
  "Loan Brokers",
  "Savings Institutions",
  "Insurance and Employee Benefit Funds",
  "Pension Funds",
  "Trusts and Estates",
  "Claims Adjusting, Actuarial Services",
  "Insurance Agencies and Brokerages",
  "Insurance Carriers",
  "Correctional Institutions",
  "Courts of Law",
  "Fire Protection",
  "Law Enforcement",
  "Public Safety",
  "Transportation Programs",
  "Utilities Administration",
  "Air, Water, and Waste Program Management",
  "Conservation Programs",
  "Education Administration Programs",
  "Public Assistance Programs",
  "Public Health",
  "Community Development and Urban Planning",
  "Housing Programs",
  "Armed Forces",
  "International Affairs",
  "Executive Offices",
  "Legislative Offices",
  "Services for the Elderly and Disabled",
  "Child Day Care Services",
  "Emergency and Relief Services",
  "Vocational Rehabilitation Services",
  "Alternative Medicine",
  "Ambulance Services",
  "Chiropractors",
  "Dentists",
  "Family Planning Centers",
  "Home Health Care Services",
  "Medical and Diagnostic Laboratories",
  "Mental Health Care",
  "Optometrists",
  "Outpatient Care Centers",
  ... 126 more items
]

First 5 leaf industries: [
  "Bars, Taverns, and Nightclubs",
  "Caterers",
  "Mobile Food Services",
  "Restaurants",
  "Bed-and-Breakfasts, Hostels, Homestays"
]

Depth of Mobile Gaming Apps: 4

Parent industries of Mobile Gaming Apps: [
  "Technology, Information and Media",
  "Technology, Information and Internet",
  "Software Development",
  "Computer Games"
]
```