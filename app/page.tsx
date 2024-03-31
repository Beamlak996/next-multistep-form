import { MultistepForm } from "@/components/multistep-form";
import Image from "next/image";

export default function Home() {
  return (
    <section className="py-24">
      <div className="container">
        <MultistepForm />
      </div>
    </section>
  );
}
