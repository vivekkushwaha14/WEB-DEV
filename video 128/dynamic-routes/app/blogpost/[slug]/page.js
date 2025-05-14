export default async function Page({ params }) {
  throw new Error("error hai")
  const { slug } = await params
  let langauges = ["python","javascipt", "java", "cpp"]
  if(langauges.includes(slug)){
    return <div>My Post : {slug}</div>
  }
  else{
    return <div> post not found</div>
  }
  return <div>My Post: {slug}</div>
}