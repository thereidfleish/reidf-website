export const metadata = { title: "Easter Egg 4" };

export default function EasterEgg4Page() {
  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Easter Egg 4</h1>
      </div>
      <p className="text-zinc-700 leading-relaxed">
        Congratulations! You found the 4th Easter Egg!
      </p>
      <p className="text-zinc-700 leading-relaxed">
        So here&apos;s your reward: I will teach you how to edit the Website,
        and you can become one of our Webmasters!
      </p>
      <p className="text-zinc-700 leading-relaxed">
        Only the boldest and most clever people get Website editing privileges,
        and by finding this Egg, you sure do.
      </p>
      <p className="text-zinc-700 leading-relaxed">
        To claim this reward, take a screen shot of this Web page and send it
        via text/email/FaceBook Messenger to Reid.
      </p>
    </div>
  );
}

