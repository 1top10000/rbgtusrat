'use client'

export default function Home() {
  const r = async () => {
    fetch('http://localhost:3000/api/form', {
      method: "POST",
          body: JSON.stringify({
              i: 11
          })
    });
  }
  return (
    <>
    </>
  );
}