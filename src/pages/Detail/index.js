export default function Detail ({ params }) {

  const { id } = params

  return (
    <div>
      <h1 className="text-xl text mx-6 text-slate-600 font-bold">Este Gif tiene como ID {id}</h1>
    </div>
  )
}
