
import Link from "next/link"

export default function Home() {

  return (
    <main className="flex flex-col p-24">
      <Link href={"/controlled-state"}>
        Controlled State - Use State com dados complexos
      </Link>

      <Link href={"/form-reference"}>
        Form by Reference - Use Ref no formulário
      </Link>

      <Link href={"/todos"}>
        Todos - Todos com useState
      </Link>

      <Link href={"/todos-context"}>
        Todos - Todos com useReducer e useContext
      </Link>
    </main>
  )
}
