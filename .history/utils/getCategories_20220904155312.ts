export const fetchCategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`
  );
  const data = await res.json();
  
  const categories = data.categories;

    return JSON.parse(JSON.stringify(categories));
    
  
  console.log(categories);
  
};