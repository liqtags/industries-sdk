interface Industry {
  name: string;
  subcategories?: Industry[];
}

interface IndustriesData {
  industries: Industry[];
}

// Load and parse the industries data
const industriesData: IndustriesData = JSON.parse(await Deno.readTextFile('./industries.json'));

/**
 * Get all top-level industries
 */
export function getTopLevelIndustries(): Industry[] {
  return industriesData.industries;
}

/**
 * Find an industry by name (case-insensitive)
 * @param name The name of the industry to find
 * @param industries Optional array of industries to search in (defaults to all industries)
 */
export function findIndustryByName(name: string, industries: Industry[] = industriesData.industries): Industry | undefined {
  const searchName = name.toLowerCase();
  
  for (const industry of industries) {
    if (industry.name.toLowerCase() === searchName) {
      return industry;
    }
    if (industry.subcategories) {
      const found = findIndustryByName(name, industry.subcategories);
      if (found) return found;
    }
  }
  return undefined;
}

/**
 * Get all subcategories of an industry
 * @param industryName The name of the industry
 */
export function getSubcategories(industryName: string): Industry[] | undefined {
  const industry = findIndustryByName(industryName);
  return industry?.subcategories;
}

/**
 * Get the full path to an industry
 * @param industryName The name of the industry to find
 */
export function getIndustryPath(industryName: string): string[] | undefined {
  const searchName = industryName.toLowerCase();
  
  function findPath(industries: Industry[], currentPath: string[] = []): string[] | undefined {
    for (const industry of industries) {
      const newPath = [...currentPath, industry.name];
      
      if (industry.name.toLowerCase() === searchName) {
        return newPath;
      }
      
      if (industry.subcategories) {
        const found = findPath(industry.subcategories, newPath);
        if (found) return found;
      }
    }
    return undefined;
  }
  
  return findPath(industriesData.industries);
}

/**
 * Get all industries at a specific depth
 * @param depth The depth level to get industries from (0 is top level)
 */
export function getIndustriesAtDepth(depth: number): Industry[] {
  const result: Industry[] = [];
  
  function traverse(industries: Industry[], currentDepth: number) {
    if (currentDepth === depth) {
      result.push(...industries);
      return;
    }
    
    for (const industry of industries) {
      if (industry.subcategories) {
        traverse(industry.subcategories, currentDepth + 1);
      }
    }
  }
  
  traverse(industriesData.industries, 0);
  return result;
}

/**
 * Get all leaf industries (industries without subcategories)
 */
export function getLeafIndustries(): Industry[] {
  const result: Industry[] = [];
  
  function traverse(industries: Industry[]) {
    for (const industry of industries) {
      if (!industry.subcategories || industry.subcategories.length === 0) {
        result.push(industry);
      } else {
        traverse(industry.subcategories);
      }
    }
  }
  
  traverse(industriesData.industries);
  return result;
}

/**
 * Get the depth of an industry
 * @param industryName The name of the industry to find
 */
export function getIndustryDepth(industryName: string): number | undefined {
  const path = getIndustryPath(industryName);
  return path ? path.length - 1 : undefined;
}

/**
 * Get all parent industries of an industry
 * @param industryName The name of the industry to find
 */
export function getParentIndustries(industryName: string): Industry[] | undefined {
  const path = getIndustryPath(industryName);
  if (!path) return undefined;
  
  const result: Industry[] = [];
  let current = industriesData.industries;
  
  for (let i = 0; i < path.length - 1; i++) {
    const parent = current.find(ind => ind.name === path[i]);
    if (parent) {
      result.push(parent);
      current = parent.subcategories || [];
    }
  }
  
  return result;
}

// Example usage
if (import.meta.main) {
  // Get all top-level industries
  console.log("Top Level Industries:", getTopLevelIndustries().map(i => i.name));
  
  // Find a specific industry
  const softwareDev = findIndustryByName("Software Development");
  console.log("\nSoftware Development Industry:", softwareDev);
  
  // Get subcategories
  const techSubcategories = getSubcategories("Technology, Information and Media");
  console.log("\nTechnology Subcategories:", techSubcategories?.map(i => i.name));
  
  // Get industry path
  const path = getIndustryPath("Mobile Gaming Apps");
  console.log("\nPath to Mobile Gaming Apps:", path);
  
  // Get industries at depth 2
  const depth2Industries = getIndustriesAtDepth(2);
  console.log("\nIndustries at depth 2:", depth2Industries.map(i => i.name));
  
  // Get leaf industries
  const leafIndustries = getLeafIndustries();
  console.log("\nFirst 5 leaf industries:", leafIndustries.slice(0, 5).map(i => i.name));
  
  // Get industry depth
  const depth = getIndustryDepth("Mobile Gaming Apps");
  console.log("\nDepth of Mobile Gaming Apps:", depth);
  
  // Get parent industries
  const parents = getParentIndustries("Mobile Gaming Apps");
  console.log("\nParent industries of Mobile Gaming Apps:", parents?.map(i => i.name));
}
