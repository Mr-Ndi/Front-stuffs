import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <h1>Hello world, this is Mr Ndi</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  )}
