import Image from "next/image";

export const metadata = { title: "Eden 9 Months" };

export default function Eden9MonthsPage() {
  return (
    <div className="flex flex-col items-center gap-8 text-center max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">Eden 9 Months</h1>

      <h3 className="text-md font-semibold text-zinc-600 dark:text-zinc-400">
        At the end of this countdown, you will have submitted your ED
        application! Woo hoo! And...you shall get a surprise from me...check
        back here at precisely 12:00 AM, 11/2/21...
      </h3>

      <Image
        src="https://server.reidf.net/reidf_files/other/eden9monthsreward"
        alt="Eden 9 Months Reward"
        width={800}
        height={600}
        style={{ width: "100%", height: "auto" }}
        className="rounded-xl"
        unoptimized
      />
      <p>)</p>
    </div>
  );
}
