
import Link from "next/link"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/controlled-state"}>
        Controlled State - Use State com dados complexos
      </Link>

      <Link href={"/form-reference"}>
        Form by Reference - Use Ref no formulário
      </Link>
    </main>
  )
}
