'use client'
import ContentSmart from "@/components/ContentSmart"
import NavBar from "@/components/NavBar"

export default function Home() {
  return (
    <main>
      <NavBar title={"Smarthphones"} parrafo="CRUD, lista de smarthphones" />
      <ContentSmart />
    </main>
  )
}
