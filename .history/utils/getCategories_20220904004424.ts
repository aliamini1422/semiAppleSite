export const fetchCategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`
  );
try {
  const data = await res.json();
  const categories = data.categories;
  console.log(categories);
  
  return categories;
} catch (error) {
  return
}
  
};