import Header from "@/app/components/header/Header";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import BookTableOverview from "@/app/components/book/BookTableOverview";

export default async function BookTable() {
  const response = await fetch("http://localhost:4000/reservations");
  const data = await response.json();

  const takenTables = data.map((r) => String(r.table));
  const date = data.map((r) => r.date);

  return (
    <>
      <Header />
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <HeroSection text="Book table" />
        <BookTableOverview takenTables={takenTables} />
      </main>
    </>
  );
}
